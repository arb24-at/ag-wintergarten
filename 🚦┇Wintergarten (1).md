```dataviewjs
const dashboard = {
  version: "0.02",

  layout: {
    sourceFolder: "〔 websites 〕/ag-wintergarten/src/content/pages",

    gridTemplate: "50% 50%",
    minColumnWidths: ["360px", "360px"],
    gap: "2rem",

    fontSize: "1.0rem",
    tableHeaderFontSize: "1.0rem",
    tableTitleFontSize: "1.25rem",
    sectionFontFamily: "SFMono-Regular, Consolas, monospace",

    cellPaddingY: "2px",
    cellPaddingX: "8px",
    rowHeight: "32px",
    lineHeight: "1.0",

    defaultHeaderColour: "var(--interactive-accent)",
    defaultHeaderTextColour: "var(--text-on-accent)",
    defaultHeaderBorderColour: "var(--interactive-accent)",
    defaultCellBorderColour: "var(--background-modifier-border)",

    useCallouts: true,
    defaultCalloutType: "info",
    calloutContentPaddingTop: "0.5rem"
  },

  tables: [
    {
      title: "P1 Content Pipeline",
      folder: "〔 websites 〕/ag-wintergarten/src/content/pages",
      filter: page =>
        isContentPage(page) &&
        normalise(page.priority) === "p1",
      sortBy: page => [
        priorityRank(page.priority),
        statusRank(page.status),
        page.file.name
      ].join("-"),
      sortDirection: "asc",

      calloutType: "todo",
      headerColour: "color-mix(in srgb, var(--color-blue) 55%, transparent)",
      headerTextColour: "var(--text-on-accent)",

      columns: [
        {
          name: "File",
          prop: "file.name",
          format: "file",
          align: "left",
          columnWidth: "40%",
          wrap: false
        },
        {
          name: "Status",
          prop: "status",
          format: "status",
          align: "centre",
          columnWidth: "10%",
          wrap: false
        },
        {
          name: "Client",
          prop: "client_review_status",
          format: "status",
          align: "centre",
          columnWidth: "20%",
          wrap: false
        },
        {
          name: "Updated",
          prop: "updated",
          format: "date",
          align: "left",
          columnWidth: "15%",
          wrap: false
        }
      ]
    },

    {
      title: "Needs Client Answers",
      folder: "〔 websites 〕/ag-wintergarten/src/content/pages",
      filter: page =>
        isContentPage(page) &&
        String(page.client_review_status ?? "").toLowerCase().includes("open"),
      sortBy: page => [
        priorityRank(page.priority),
        page.file.name
      ].join("-"),
      sortDirection: "asc",

      calloutType: "question",
      headerColour: "color-mix(in srgb, var(--color-orange) 55%, transparent)",
      headerTextColour: "var(--text-normal)",

      columns: [
        {
          name: "File",
          prop: "file.name",
          format: "file",
          align: "left",
          columnWidth: "28%",
          wrap: false
        },
        {
          name: "Priority",
          prop: "priority",
          format: "badge",
          align: "centre",
          columnWidth: "12%",
          wrap: false
        },
        {
          name: "Primary Keyword",
          prop: "primary_keyword",
          format: "text",
          align: "left",
          columnWidth: "28%",
          wrap: false
        },
        {
          name: "Risk / Note",
          prop: "risk",
          format: "text",
          align: "left",
          columnWidth: "32%",
          wrap: true
        }
      ]
    },

    {
      title: "SEO Review",
      folder: "〔 websites 〕/ag-wintergarten/src/content/pages",
      filter: page =>
        isContentPage(page) &&
        String(page.seo_status ?? "").toLowerCase() !== "ready",
      sortBy: page => [
        priorityRank(page.priority),
        page.file.name
      ].join("-"),
      sortDirection: "asc",

      calloutType: "warning",
      headerColour: "color-mix(in srgb, var(--color-yellow) 55%, transparent)",
      headerTextColour: "var(--text-normal)",

      columns: [
        {
          name: "File",
          prop: "file.name",
          format: "file",
          align: "left",
          columnWidth: "25%",
          wrap: false
        },
        {
          name: "SEO",
          prop: "seo_status",
          format: "status",
          align: "centre",
          columnWidth: "17%",
          wrap: false
        },
        {
          name: "Intent",
          prop: "intent",
          format: "text",
          align: "left",
          columnWidth: "28%",
          wrap: false
        },
        {
          name: "Cluster",
          prop: "cluster",
          format: "text",
          align: "left",
          columnWidth: "30%",
          wrap: false
        }
      ]
    },

    {
      title: "All Content Pages",
      folder: "〔 websites 〕/ag-wintergarten/src/content/pages",
      filter: page => isContentPage(page),
      sortBy: page => [
        priorityRank(page.priority),
        page.url ?? page.file.name
      ].join("-"),
      sortDirection: "asc",

      calloutType: "example",
      headerColour: "color-mix(in srgb, var(--interactive-accent) 45%, transparent)",
      headerTextColour: "var(--text-on-accent)",

      columns: [
        {
          name: "File",
          prop: "file.name",
          format: "file",
          align: "left",
          columnWidth: "24%",
          wrap: false
        },
        {
          name: "Priority",
          prop: "priority",
          format: "badge",
          align: "centre",
          columnWidth: "10%",
          wrap: false
        },
        {
          name: "Page Type",
          prop: "page_type",
          format: "text",
          align: "left",
          columnWidth: "20%",
          wrap: false
        },
        {
          name: "Content",
          prop: "content_status",
          format: "status",
          align: "centre",
          columnWidth: "16%",
          wrap: false
        },
        {
          name: "Draft",
          prop: "draft",
          format: "boolean",
          align: "centre",
          columnWidth: "10%",
          wrap: false
        },
        {
          name: "Version",
          prop: "version",
          format: "text",
          align: "centre",
          columnWidth: "10%",
          wrap: false
        },
        {
          name: "Updated",
          prop: "updated",
          format: "date",
          align: "left",
          columnWidth: "10%",
          wrap: false
        }
      ]
    }
  ]
};

const { layout, tables } = dashboard;

const formatters = {
  text: value => escapeHtml(formatValue(value)),
  date: value => formatDate(value),
  file: (value, page) => internalLink(page.file.path, value ?? page.file.name),
  badge: value => badge(value),
  status: value => statusBadge(value),
  boolean: value => booleanBadge(value)
};

function isContentPage(page) {
  return (
    String(page.file?.path ?? "").startsWith(`${layout.sourceFolder}/`) ||
    page.type === "content-page" ||
    page.page_type != null ||
    page.primary_keyword != null ||
    page.content_status != null ||
    page.seo_status != null ||
    page.client_review_status != null
  );
}

function normalise(value) {
  return String(value ?? "").trim().toLowerCase();
}

function priorityRank(value) {
  const priority = normalise(value);

  if (priority === "p1") return 1;
  if (priority === "p2") return 2;
  if (priority === "p3") return 3;

  return 9;
}

function statusRank(value) {
  const status = normalise(value);

  if (status.includes("draft")) return 1;
  if (status.includes("review")) return 2;
  if (status.includes("ready")) return 3;
  if (status.includes("published")) return 4;

  return 9;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatValue(value) {
  if (value == null) return "";

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "object") {
    if (typeof value.path === "string") return value.path;
    if (typeof value.toString === "function") return value.toString();
    return JSON.stringify(value);
  }

  return value;
}

function getValue(object, path) {
  if (!path) return undefined;

  return String(path)
    .split(".")
    .reduce((value, key) => {
      if (value == null) return undefined;
      return value[key];
    }, object);
}

function sourceFromFolder(folder) {
  if (!folder) return undefined;
  return `"${String(folder).replaceAll('"', '\\"')}"`;
}

function pagesFromFolder(folder) {
  const folderPath = String(folder ?? "").replace(/^\/+|\/+$/g, "");

  if (!folderPath) return dv.pages();

  const files = app.vault
    .getMarkdownFiles()
    .filter(file => {
      const path = String(file.path ?? "");

      return (
        path.startsWith(`${folderPath}/`) ||
        path.includes(`/${folderPath}/`)
      );
    });

  const pages = files.map(file => {
    const frontmatter = app.metadataCache.getFileCache(file)?.frontmatter ?? {};

    return {
      ...frontmatter,
      file: {
        name: file.basename,
        path: file.path,
        ext: file.extension
      }
    };
  });

  return dv.array(pages);
}

function toArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value?.array === "function") return value.array();
  return Array.from(value ?? []);
}

function internalLink(path, label) {
  const safePath = escapeHtml(path);
  const safeLabel = escapeHtml(label);

  return `<a class="internal-link" data-href="${safePath}" href="${safePath}">${safeLabel}</a>`;
}

function formatDate(value) {
  if (!value) return "";

  if (typeof value?.toISODate === "function") {
    return escapeHtml(value.toISODate());
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return escapeHtml(value);

  return escapeHtml(date.toISOString().slice(0, 10));
}

function getFormatter(formatName) {
  return formatters[formatName] ?? formatters.text;
}

function normaliseAlign(align) {
  const value = String(align ?? "left").toLowerCase();

  if (value === "centre") return "center";
  if (["left", "center", "right"].includes(value)) return value;

  return "left";
}

function statusBadge(value) {
  const label = formatValue(value);

  if (!label) return "";

  const normal = normalise(label);

  let bg = "var(--background-secondary)";
  let colour = "var(--text-normal)";
  let border = "var(--background-modifier-border)";

  if (normal.includes("draft")) {
    bg = "color-mix(in srgb, var(--color-blue) 18%, transparent)";
    border = "color-mix(in srgb, var(--color-blue) 55%, transparent)";
  } else if (normal.includes("open") || normal.includes("question")) {
    bg = "color-mix(in srgb, var(--color-orange) 18%, transparent)";
    border = "color-mix(in srgb, var(--color-orange) 55%, transparent)";
  } else if (normal.includes("review") || normal.includes("needs")) {
    bg = "color-mix(in srgb, var(--color-yellow) 22%, transparent)";
    border = "color-mix(in srgb, var(--color-yellow) 60%, transparent)";
  } else if (normal.includes("ready") || normal.includes("done") || normal.includes("published")) {
    bg = "color-mix(in srgb, var(--color-green) 20%, transparent)";
    border = "color-mix(in srgb, var(--color-green) 55%, transparent)";
  }

  return `
    <span style="
      display:inline-block;
      max-width:100%;
      padding:2px 8px;
      border:1px solid ${border};
      border-radius:999px;
      background:${bg};
      color:${colour};
      font-size:0.85em;
      line-height:1.2;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      vertical-align:middle;
    ">
      ${escapeHtml(label)}
    </span>
  `;
}

function badge(value) {
  const label = formatValue(value);
  if (!label) return "";

  return `
    <span style="
      display:inline-block;
      padding:2px 8px;
      border-radius:999px;
      background:var(--background-secondary);
      border:1px solid var(--background-modifier-border);
      font-size:0.85em;
      line-height:1.2;
      white-space:nowrap;
    ">
      ${escapeHtml(label)}
    </span>
  `;
}

function booleanBadge(value) {
  if (value === true) return statusBadge("draft");
  if (value === false) return statusBadge("public");
  return "";
}

function getPages(table) {
  let pages = table.folder
    ? pagesFromFolder(table.folder)
    : dv.pages();

  if (typeof table.filter === "function") {
    pages = pages.where(table.filter);
  }

  if (table.sortBy) {
    const direction = table.sortDirection ?? "asc";

    if (typeof table.sortBy === "function") {
      pages = pages.sort(table.sortBy, direction);
    } else {
      pages = pages.sort(page => getValue(page, table.sortBy), direction);
    }
  }

  return pages;
}

function getAllContentPages() {
  return pagesFromFolder(layout.sourceFolder).where(isContentPage);
}

function countWhere(pages, predicate) {
  return toArray(pages).filter(predicate).length;
}

function renderCell(page, column) {
  const formatter = getFormatter(column.format);
  const value = getValue(page, column.prop);

  return formatter(value, page, column);
}

function renderTableHtml(table) {
  const pages = toArray(getPages(table));

  const headerColour = table.headerColour ?? layout.defaultHeaderColour;
  const headerTextColour = table.headerTextColour ?? layout.defaultHeaderTextColour;
  const headerBorderColour = table.headerBorderColour ?? layout.defaultHeaderBorderColour;
  const cellBorderColour = table.cellBorderColour ?? layout.defaultCellBorderColour;

  const emptyHtml = pages.length === 0
    ? `
      <tr>
        <td colspan="${table.columns.length}" style="
          padding:0.75rem;
          text-align:center;
          color:var(--text-muted);
          border-bottom:1px solid ${cellBorderColour};
        ">
          No matching pages.
        </td>
      </tr>
    `
    : "";

  const colGroup = `
    <colgroup>
      ${table.columns.map(column => `
        <col style="width:${column.columnWidth ?? "auto"};">
      `).join("")}
    </colgroup>
  `;

  const headerHtml = table.columns.map(column => {
    const align = normaliseAlign(column.align);
    const whiteSpace = column.wrap === false ? "nowrap" : "normal";

    return `
      <th style="
        text-align:${align};
        padding:${layout.cellPaddingY} ${layout.cellPaddingX};
        height:${layout.rowHeight};
        border-bottom:1px solid ${headerBorderColour};
        background:${headerColour};
        color:${headerTextColour};
        font-size:${layout.tableHeaderFontSize};
        line-height:${layout.lineHeight};
        white-space:${whiteSpace};
        vertical-align:middle;
        overflow:hidden;
        text-overflow:ellipsis;
        font-family:inherit;
      ">
        ${escapeHtml(column.name)}
      </th>
    `;
  }).join("");

  const bodyHtml = pages.map(page => {
    const cells = table.columns.map(column => {
      const align = normaliseAlign(column.align);
      const whiteSpace = column.wrap === false ? "nowrap" : "normal";

      return `
        <td style="
          text-align:${align};
          padding:${layout.cellPaddingY} ${layout.cellPaddingX};
          height:${layout.rowHeight};
          border-bottom:1px solid ${cellBorderColour};
          vertical-align:middle;
          font-size:${layout.fontSize};
          line-height:${layout.lineHeight};
          white-space:${whiteSpace};
          overflow:hidden;
          text-overflow:ellipsis;
          font-family:inherit;
        ">
          ${renderCell(page, column)}
        </td>
      `;
    }).join("");

    return `<tr>${cells}</tr>`;
  }).join("");

  return `
    <table style="
      width:100%;
      max-width:100%;
      border-collapse:collapse;
      table-layout:fixed;
      font-family:inherit;
    ">
      ${colGroup}
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody>
        ${bodyHtml || emptyHtml}
      </tbody>
    </table>
  `;
}

function renderCallout(table, contentHtml) {
  const calloutType = table.calloutType ?? layout.defaultCalloutType;

  return `
    <div class="callout" data-callout="${escapeHtml(calloutType)}" style="font-family:inherit;">
      <div class="callout-title" style="font-family:inherit;">
        <div class="callout-icon"></div>
        <div class="callout-title-inner" style="
          font-size:${layout.tableTitleFontSize};
          font-family:inherit;
        ">
          ${escapeHtml(table.title)}
        </div>
      </div>
      <div class="callout-content" style="
        padding-top:${layout.calloutContentPaddingTop};
        font-family:inherit;
      ">
        ${contentHtml}
      </div>
    </div>
  `;
}

function renderTable(table) {
  const tableHtml = renderTableHtml(table);

  return `
    <section style="
      min-width:0;
      width:100%;
      overflow-x:hidden;
      font-family:${layout.sectionFontFamily};
    ">
      ${
        layout.useCallouts
          ? renderCallout(table, tableHtml)
          : `
            <h2 style="
              margin:0 0 0.5rem 0;
              font-size:${layout.tableTitleFontSize};
              font-family:inherit;
            ">
              ${escapeHtml(table.title)}
            </h2>
            ${tableHtml}
          `
      }
    </section>
  `;
}

function renderSummary() {
  const pages = toArray(getAllContentPages());

  const total = pages.length;
  const p1 = countWhere(pages, page => normalise(page.priority) === "p1");
  const draft = countWhere(pages, page => normalise(page.status).includes("draft") || page.draft === true);
  const clientOpen = countWhere(pages, page => normalise(page.client_review_status).includes("open"));
  const seoNeedsReview = countWhere(pages, page => normalise(page.seo_status) !== "ready");
  const ready = countWhere(pages, page =>
    normalise(page.status).includes("ready") ||
    normalise(page.status).includes("published") ||
    page.draft === false
  );

  const cards = [
    ["Total", total],
    ["P1", p1],
    ["Draft", draft],
    ["Client Open", clientOpen],
    ["SEO Review", seoNeedsReview],
    ["Ready/Public", ready]
  ];

  return `
    <div style="
      display:grid;
      grid-template-columns:repeat(6, minmax(110px, 1fr));
      gap:0.75rem;
      margin:0 0 1.25rem 0;
      font-family:${layout.sectionFontFamily};
    ">
      ${cards.map(([label, value]) => `
        <div style="
          border:1px solid var(--background-modifier-border);
          border-radius:10px;
          padding:0.75rem;
          background:var(--background-secondary);
          min-width:0;
        ">
          <div style="
            font-size:0.8rem;
            color:var(--text-muted);
            margin-bottom:0.35rem;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          ">
            ${escapeHtml(label)}
          </div>
          <div style="
            font-size:1.5rem;
            font-weight:700;
            line-height:1;
          ">
            ${escapeHtml(value)}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

const gridColumns = layout.gridTemplate
  .split(" ")
  .map((width, index) => {
    const minWidth = layout.minColumnWidths[index] ?? "0";
    return `minmax(${minWidth}, ${width})`;
  })
  .join(" ");

dv.container.innerHTML = `
  ${renderSummary()}

  <div style="
    display:grid;
    grid-template-columns:${gridColumns};
    gap:${layout.gap};
    align-items:start;
    width:100%;
    max-width:100%;
    font-family:${layout.sectionFontFamily};
  ">
    ${tables.map(renderTable).join("")}
  </div>
`;
```