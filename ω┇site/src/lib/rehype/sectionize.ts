type HastNode = {
  type?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

type SectionDefinition = {
  type: string;
  variant: string;
  layout: string;
  actionLabel?: string;
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

const approvedSections: Record<string, Record<string, SectionDefinition>> = {
  home: {
    'passt-ihre-anfrage-hierher': {
      type: 'fit-check',
      variant: 'diagnostic-cards',
      layout: 'diagnostic-grid',
    },
    'wobei-die-prufung-helfen-kann': {
      type: 'split-text-image-explainer',
      variant: 'media-left',
      layout: 'checkerboard-media-left',
    },
    'haufige-grunde-fur-eine-anfrage': {
      type: 'diagnostic-card-grid',
      variant: 'standard',
      layout: 'diagnostic-grid',
    },
    'was-sie-vor-der-anfrage-notieren-sollten': {
      type: 'enquiry-prep',
      variant: 'media-right',
      layout: 'checkerboard-media-right',
      actionLabel: 'Angaben unten sammeln',
    },
    'ablauf-einer-anfrage': {
      type: 'process-steps',
      variant: 'dark-band',
      layout: 'process',
    },
    einsatzbereich: {
      type: 'service-area',
      variant: 'compact',
      layout: 'compact-explainer',
    },
    'haufige-fragen': {
      type: 'faq',
      variant: 'static-rows',
      layout: 'faq',
    },
    'anfrage-stellen': {
      type: 'enquiry-form-block',
      variant: 'request',
      layout: 'request',
      actionLabel: 'Zum Kontaktbereich',
    },
  },
  repair: {
    'wann-reparatur-oder-sanierung-passt': {
      type: 'fit-check',
      variant: 'diagnostic-cards',
      layout: 'diagnostic-grid',
    },
    'typische-reparaturfalle': {
      type: 'service-scope',
      variant: 'media-left',
      layout: 'checkerboard-media-left',
    },
    'bauteile-und-arbeitsbereiche': {
      type: 'service-scope',
      variant: 'media-right',
      layout: 'checkerboard-media-right',
    },
    'welche-angaben-vor-der-prufung-helfen': {
      type: 'enquiry-prep',
      variant: 'diagnostic-cards',
      layout: 'diagnostic-grid',
      actionLabel: 'Reparaturanfrage vorbereiten',
    },
    'was-erst-nach-der-schadensprufung-entschieden-wird': {
      type: 'compact-explainer',
      variant: 'inspection-boundary',
      layout: 'compact-explainer',
    },
    'ablauf-der-reparaturanfrage': {
      type: 'process-steps',
      variant: 'dark-band',
      layout: 'process',
    },
    'einsatzbereich-berlin-und-brandenburg': {
      type: 'service-area',
      variant: 'compact',
      layout: 'compact-explainer',
    },
    'haufige-fragen': {
      type: 'faq',
      variant: 'static-rows',
      layout: 'faq',
    },
    'anfrage-stellen': {
      type: 'enquiry-form-block',
      variant: 'request',
      layout: 'request',
      actionLabel: 'Zum Kontaktbereich',
    },
  },
  leak: {
    'passt-diese-seite-zu-ihrem-problem': {
      type: 'fit-check',
      variant: 'diagnostic-cards',
      layout: 'diagnostic-grid',
    },
    'was-sie-zuerst-beobachten-sollten': {
      type: 'diagnostic-card-grid',
      variant: 'first-observations',
      layout: 'diagnostic-grid',
    },
    'wo-wasser-haufig-eintreten-kann': {
      type: 'causes-affected-zones',
      variant: 'media-left',
      layout: 'checkerboard-media-left',
    },
    'wenn-das-wintergartendach-undicht-wirkt': {
      type: 'split-text-image-explainer',
      variant: 'media-right',
      layout: 'checkerboard-media-right',
    },
    'regenwasser-oder-kondenswasser': {
      type: 'compact-explainer',
      variant: 'clarification',
      layout: 'compact-explainer',
    },
    'was-vor-einer-abdichtung-geklart-werden-sollte': {
      type: 'compact-explainer',
      variant: 'inspection-boundary',
      layout: 'compact-explainer',
    },
    'nutzliche-angaben-fur-die-anfrage': {
      type: 'enquiry-prep',
      variant: 'diagnostic-cards',
      layout: 'diagnostic-grid',
      actionLabel: 'Leckageangaben vorbereiten',
    },
    'so-lauft-eine-leckage-anfrage-ab': {
      type: 'process-steps',
      variant: 'dark-band',
      layout: 'process',
    },
    'einsatzbereich-berlin-und-brandenburg': {
      type: 'service-area',
      variant: 'compact',
      layout: 'compact-explainer',
    },
    'haufige-fragen': {
      type: 'faq',
      variant: 'static-rows',
      layout: 'faq',
    },
    'anfrage-vorbereiten': {
      type: 'enquiry-form-block',
      variant: 'request',
      layout: 'request',
      actionLabel: 'Zum Kontaktbereich',
    },
  },
};

function fallbackSection(kind: string): SectionDefinition {
  const typeByKind: Record<string, string> = {
    area: 'service-area',
    areas: 'causes-affected-zones',
    default: 'content-section',
    diagnostic: 'diagnostic-card-grid',
    explain: 'compact-explainer',
    faq: 'faq',
    fit: 'fit-check',
    help: 'split-text-image-explainer',
    prep: 'enquiry-prep',
    process: 'process-steps',
    request: 'enquiry-form-block',
  };

  return {
    type: typeByKind[kind] ?? 'content-section',
    variant: 'standard',
    layout: kind,
  };
}

function sectionDefinition(page: string, key: string, kind: string) {
  return approvedSections[page]?.[key] ?? fallbackSection(kind);
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

  if (layout === 'process') {
    addClass(section, 'content-section--process');
  }

  if (layout === 'faq') {
    addClass(section, 'content-section--faq');
  }

  if (layout === 'request') {
    addClass(section, 'content-section--request');
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
        const definition = sectionDefinition(currentPage, key, kind);
        const layout = definition.layout;
        const properties: Record<string, unknown> = {
          className: [
            'content-section',
            `content-section--${kind}`,
            `content-section--${key}`,
            `content-section--type-${definition.type}`,
            `content-section--variant-${definition.variant}`,
          ],
          'data-section-key': key,
          'data-section-layout': layout,
          'data-section-type': definition.type,
          'data-section-variant': definition.variant,
        };

        if (definition.actionLabel) {
          properties['data-section-action-label'] = definition.actionLabel;
        }

        currentSection = {
          type: 'element',
          tagName: 'section',
          properties,
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

      const layout = String(section.properties?.['data-section-layout'] ?? '');
      const label = String(section.properties?.['data-section-action-label'] ?? '');

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
