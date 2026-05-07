import { defineConfig } from 'astro/config';
import process from 'node:process';
import sectionize from './src/lib/rehype/sectionize';

type HastNode = {
  type?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split('/') : [];
const isUserPagesRepo = owner && repo === `${owner}.github.io`;
const githubBase = repository && !isUserPagesRepo ? `/${repo}` : '/';

const site = process.env.SITE || (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH || githubBase;

function prefixInternalLinks() {
  const cleanBase = base === '/' ? '' : base.replace(/\/$/, '');

  return function transformer(tree: HastNode) {
    if (!cleanBase) return;

    function visit(node: HastNode) {
      if (node && node.type === 'element' && node.properties) {
        const href = node.properties.href;

        if (
          typeof href === 'string' &&
          href.startsWith('/') &&
          !href.startsWith('//') &&
          !href.startsWith(`${cleanBase}/`)
        ) {
          node.properties.href = `${cleanBase}${href}`;
        }
      }

      if (Array.isArray(node?.children)) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
}

export default defineConfig({
  site,
  base,
  markdown: {
    rehypePlugins: [prefixInternalLinks, sectionize],
  },
});
