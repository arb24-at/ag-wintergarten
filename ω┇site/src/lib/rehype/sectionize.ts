type HastNode = {
  type?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function textContent(node: HastNode): string {
  if (typeof node.value === 'string') {
    return node.value;
  }

  return node.children?.map(textContent).join('') ?? '';
}

function normalise(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function hasElement(node: HastNode, tagName: string): boolean {
  if (node.type === 'element' && node.tagName === tagName) {
    return true;
  }

  return node.children?.some((child) => hasElement(child, tagName)) ?? false;
}

function addClass(node: HastNode, className: string) {
  const properties = (node.properties ??= {});
  const current = properties.className;

  if (Array.isArray(current)) {
    if (!current.includes(className)) current.push(className);
    return;
  }

  if (typeof current === 'string') {
    properties.className = current.includes(className) ? current : `${current} ${className}`;
    return;
  }

  properties.className = [className];
}

function getClassList(node: HastNode): string[] {
  const current = node.properties?.className;

  if (Array.isArray(current)) {
    return current.filter((value): value is string => typeof value === 'string');
  }

  if (typeof current === 'string') {
    return current.split(/\s+/).filter(Boolean);
  }

  return [];
}

function hasClass(node: HastNode, className: string) {
  return getClassList(node).includes(className);
}

function sectionAction(label: string): HastNode {
  return {
    type: 'element',
    tagName: 'a',
    properties: {
      className: ['section-cta'],
      href: '#kontakt',
    },
    children: [{ type: 'text', value: label }],
  };
}

function actionLabel(page: string, key: string) {
  const actions: Record<string, Record<string, string>> = {
    home: {
      'was-sie-vor-der-anfrage-notieren-sollten': 'Angaben unten sammeln',
      'anfrage-stellen': 'Zum Kontaktbereich',
    },
    repair: {
      'welche-angaben-vor-der-prufung-helfen': 'Reparaturanfrage vorbereiten',
      'anfrage-stellen': 'Zum Kontaktbereich',
    },
    leak: {
      'nutzliche-angaben-fur-die-anfrage': 'Leckageangaben vorbereiten',
      'anfrage-vorbereiten': 'Zum Kontaktbereich',
    },
  };

  return actions[page]?.[key];
}

function markImageParagraphs(node: HastNode) {
  if (!Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    if (child.type === 'element' && child.tagName === 'p' && hasElement(child, 'img')) {
      addClass(child, 'content-section__media');
    }
  }
}

function wrapSubheadGroups(section: HastNode) {
  if (!Array.isArray(section.children)) {
    return;
  }

  const nextChildren: HastNode[] = [];
  let groupsWrapper: HastNode | undefined;
  let currentItem: HastNode | undefined;

  for (const child of section.children) {
    if (child.type === 'element' && child.tagName === 'h3') {
      if (!groupsWrapper) {
        groupsWrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['section-items'] },
          children: [],
        };
        nextChildren.push(groupsWrapper);
      }

      currentItem = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['section-item'] },
        children: [child],
      };
      groupsWrapper.children?.push(currentItem);
      continue;
    }

    if (currentItem && child.type === 'element' && child.tagName !== 'h2') {
      currentItem.children?.push(child);
      continue;
    }

    nextChildren.push(child);
  }

  section.children = nextChildren;
}

function sectionKind(title: string) {
  const key = normalise(title);

  if (key.includes('anfrage-stellen')) return 'request';
  if (key.includes('haufige-fragen')) return 'faq';
  if (key.includes('ablauf') || key.includes('lauft') || key.includes('schritte')) return 'process';
  if (key.includes('einsatzbereich') || key.includes('umgebung')) return 'area';
  if (key.includes('passt') || key.includes('wann')) return 'fit';
  if (key.includes('beobachten') || key.includes('grunde') || key.includes('reparaturfalle')) return 'diagnostic';
  if (key.includes('arbeitsbereiche') || key.includes('bauteile') || key.includes('eintreten')) return 'areas';
  if (key.includes('angaben') || key.includes('informationen') || key.includes('notieren')) return 'prep';
  if (key.includes('abdichtung') || key.includes('dach') || key.includes('kondenswasser')) return 'explain';
  if (key.includes('wobei') || key.includes('helfen')) return 'help';

  return 'default';
}

function pageKind(tree: HastNode) {
  const firstHeading = tree.children?.find((child) => child.type === 'element' && child.tagName === 'h1');
  const heading = normalise(firstHeading ? textContent(firstHeading) : '');

  if (heading.includes('wintergarten-undicht') || heading.includes('wassereintritt-richtig-einordnen')) {
    return 'leak';
  }

  if (heading === 'wintergarten-reparatur-berlin') {
    return 'repair';
  }

  if (heading.includes('wintergarten-reparatur-und-sanierung')) {
    return 'home';
  }

  return 'default';
}

const sectionLayouts: Record<string, Record<string, string>> = {
  home: {
    'passt-ihre-anfrage-hierher': 'diagnostic-grid',
    'wobei-die-prufung-helfen-kann': 'checkerboard-media-left',
    'haufige-grunde-fur-eine-anfrage': 'diagnostic-grid',
    'was-sie-vor-der-anfrage-notieren-sollten': 'checkerboard-media-right',
    'ablauf-einer-anfrage': 'process',
    einsatzbereich: 'compact-explainer',
    'haufige-fragen': 'faq',
    'anfrage-stellen': 'request',
  },
  repair: {
    'wann-reparatur-oder-sanierung-passt': 'diagnostic-grid',
    'typische-reparaturfalle': 'checkerboard-media-left',
    'bauteile-und-arbeitsbereiche': 'checkerboard-media-right',
    'welche-angaben-vor-der-prufung-helfen': 'diagnostic-grid',
    'was-erst-nach-der-schadensprufung-entschieden-wird': 'compact-explainer',
    'ablauf-der-reparaturanfrage': 'process',
    'einsatzbereich-berlin-und-brandenburg': 'compact-explainer',
    'haufige-fragen': 'faq',
    'anfrage-stellen': 'request',
  },
  leak: {
    'passt-diese-seite-zu-ihrem-problem': 'diagnostic-grid',
    'was-sie-zuerst-beobachten-sollten': 'diagnostic-grid',
    'wo-wasser-haufig-eintreten-kann': 'checkerboard-media-left',
    'wenn-das-wintergartendach-undicht-wirkt': 'checkerboard-media-right',
    'regenwasser-oder-kondenswasser': 'compact-explainer',
    'was-vor-einer-abdichtung-geklart-werden-sollte': 'compact-explainer',
    'nutzliche-angaben-fur-die-anfrage': 'diagnostic-grid',
    'so-lauft-eine-leckage-anfrage-ab': 'process',
    'einsatzbereich-berlin-und-brandenburg': 'compact-explainer',
    'haufige-fragen': 'faq',
    'anfrage-vorbereiten': 'request',
  },
};

function sectionLayout(page: string, key: string, kind: string) {
  return sectionLayouts[page]?.[key] ?? kind;
}

function addLayoutClasses(section: HastNode, layout: string) {
  addClass(section, `content-section--layout-${layout}`);

  if (layout.startsWith('checkerboard')) {
    addClass(section, 'content-section--checkerboard');
  }

  if (layout.endsWith('media-left')) {
    addClass(section, 'content-section--media-left');
  }

  if (layout.endsWith('media-right')) {
    addClass(section, 'content-section--media-right');
  }

  if (layout === 'diagnostic-grid') {
    addClass(section, 'content-section--diagnostic-grid');
  }

  if (layout === 'compact-explainer') {
    addClass(section, 'content-section--compact-explainer');
  }
}

export default function sectionize() {
  return function transformer(tree: HastNode) {
    const children = tree.children;

    if (!Array.isArray(children)) {
      return;
    }

    const currentPage = pageKind(tree);
    const nextChildren: HastNode[] = [];
    let currentSection: HastNode | undefined;

    for (const child of children) {
      if (child.type === 'element' && child.tagName === 'h2') {
        const title = textContent(child);
        const key = normalise(title);
        const kind = sectionKind(title);
        const layout = sectionLayout(currentPage, key, kind);

        currentSection = {
          type: 'element',
          tagName: 'section',
          properties: {
            className: ['content-section', `content-section--${kind}`, `content-section--${key}`],
            'data-section-key': key,
            'data-section-layout': layout,
          },
          children: [child],
        };

        addLayoutClasses(currentSection, layout);

        nextChildren.push(currentSection);
        continue;
      }

      if (currentSection) {
        currentSection.children?.push(child);
      } else {
        nextChildren.push(child);
      }
    }

    for (const section of nextChildren) {
      if (section.type !== 'element' || section.tagName !== 'section') {
        continue;
      }

      const key = String(section.properties?.['data-section-key'] ?? '');
      const layout = String(section.properties?.['data-section-layout'] ?? '');
      const label = actionLabel(currentPage, key);

      if (hasElement(section, 'img')) addClass(section, 'content-section--has-image');
      if (hasElement(section, 'ul') || hasElement(section, 'ol')) addClass(section, 'content-section--has-list');
      if (hasElement(section, 'h3')) addClass(section, 'content-section--has-subheads');
      markImageParagraphs(section);
      if (layout === 'process' || layout === 'faq') {
        wrapSubheadGroups(section);
      }
      if (label && !hasClass(section, 'content-section--process') && !hasClass(section, 'content-section--faq')) {
        section.children?.push(sectionAction(label));
      }
    }

    tree.children = nextChildren;
  };
}
