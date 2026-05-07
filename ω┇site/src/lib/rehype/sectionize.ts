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

function sectionKind(title: string) {
  const key = normalise(title);

  if (key.includes('wobei') || key.includes('helfen')) return 'help';
  if (key.includes('anzeichen') || key.includes('reparaturfalle') || key.includes('grunde')) return 'signs';
  if (key.includes('arbeitsbereiche') || key.includes('eintreten')) return 'areas';
  if (key.includes('anfrage-stellen')) return 'request';
  if (key.includes('ablauf') || key.includes('lauft') || key.includes('anfrage')) return 'process';
  if (key.includes('einsatzbereich') || key.includes('umgebung')) return 'area';
  if (key.includes('haufige-fragen')) return 'faq';

  return 'default';
}

export default function sectionize() {
  return function transformer(tree: HastNode) {
    const children = tree.children;

    if (!Array.isArray(children)) {
      return;
    }

    const nextChildren: HastNode[] = [];
    let currentSection: HastNode | undefined;

    for (const child of children) {
      if (child.type === 'element' && child.tagName === 'h2') {
        const title = textContent(child);
        const key = normalise(title);
        const kind = sectionKind(title);

        currentSection = {
          type: 'element',
          tagName: 'section',
          properties: {
            className: ['content-section', `content-section--${kind}`, `content-section--${key}`],
            'data-section-key': key,
          },
          children: [child],
        };

        nextChildren.push(currentSection);
        continue;
      }

      if (currentSection) {
        currentSection.children?.push(child);
      } else {
        nextChildren.push(child);
      }
    }

    tree.children = nextChildren;
  };
}
