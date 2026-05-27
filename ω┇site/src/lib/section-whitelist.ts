export type SectionDefinition = {
  type: string;
  variant: string;
  layout: string;
  actionLabel?: string;
};

export type SectionFamily = {
  type: string;
  family: string;
  layouts: string[];
  variants: string[];
  purpose: string;
};

export const sectionWhitelist: SectionFamily[] = [
  {
    type: 'fit-check',
    family: 'diagnostic',
    layouts: ['diagnostic-grid'],
    variants: ['diagnostic-cards'],
    purpose: 'Confirm whether the visitor is in the right place without delaying contact.',
  },
  {
    type: 'diagnostic-card-grid',
    family: 'diagnostic',
    layouts: ['diagnostic-grid'],
    variants: ['standard', 'first-observations'],
    purpose: 'Group symptoms, causes, or observations into scannable website modules.',
  },
  {
    type: 'service-scope',
    family: 'service',
    layouts: ['checkerboard-media-left', 'checkerboard-media-right', 'diagnostic-grid'],
    variants: ['media-left', 'media-right', 'diagnostic-cards'],
    purpose: 'Explain what work can be checked or repaired and where the service boundary sits.',
  },
  {
    type: 'causes-affected-zones',
    family: 'explanation',
    layouts: ['checkerboard-media-left', 'checkerboard-media-right'],
    variants: ['media-left', 'media-right'],
    purpose: 'Connect visible damage to likely zones such as roof, profile, seal, drainage, or wall connection.',
  },
  {
    type: 'split-text-image-explainer',
    family: 'media',
    layouts: ['checkerboard-media-left', 'checkerboard-media-right'],
    variants: ['media-left', 'media-right'],
    purpose: 'Use a strong image/text pairing for practical explanation.',
  },
  {
    type: 'compact-explainer',
    family: 'supporting-copy',
    layouts: ['compact-explainer'],
    variants: ['standard', 'clarification', 'inspection-boundary'],
    purpose: 'Provide concise supporting detail without turning the page into an article.',
  },
  {
    type: 'early-contact',
    family: 'conversion',
    layouts: ['compact-explainer'],
    variants: ['early-cta', 'quick-check'],
    purpose: 'Offer an early low-friction enquiry point before detailed guidance begins.',
  },
  {
    type: 'enquiry-prep',
    family: 'conversion',
    layouts: ['diagnostic-grid', 'checkerboard-media-right', 'compact-explainer'],
    variants: ['diagnostic-cards', 'media-right', 'early-cta'],
    purpose: 'Explain helpful enquiry details while making clear that contact can happen first.',
  },
  {
    type: 'process-steps',
    family: 'process',
    layouts: ['process'],
    variants: ['dark-band'],
    purpose: 'Show the enquiry and repair flow in a compact trust-building band.',
  },
  {
    type: 'service-area',
    family: 'supporting-copy',
    layouts: ['compact-explainer'],
    variants: ['compact'],
    purpose: 'Clarify Berlin and Brandenburg coverage.',
  },
  {
    type: 'faq',
    family: 'supporting-copy',
    layouts: ['faq'],
    variants: ['static-rows'],
    purpose: 'Answer common objections or uncertainty near the lower page.',
  },
  {
    type: 'enquiry-form-block',
    family: 'conversion',
    layouts: ['request'],
    variants: ['request'],
    purpose: 'Lead into the main form and contact area.',
  },
  {
    type: 'content-section',
    family: 'fallback',
    layouts: ['default'],
    variants: ['standard'],
    purpose: 'Safe fallback for sections that have not yet been assigned to a stronger family.',
  },
];

const allowedTypes = new Set(sectionWhitelist.map((section) => section.type));

export function isAllowedSectionType(type: string) {
  return allowedTypes.has(type);
}

function familyForType(type: string) {
  return sectionWhitelist.find((section) => section.type === type);
}

export function fallbackSection(kind: string): SectionDefinition {
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
    quick: 'early-contact',
    request: 'enquiry-form-block',
  };

  const type = typeByKind[kind] ?? 'content-section';
  const family = familyForType(type);

  return {
    type,
    variant: family?.variants[0] ?? 'standard',
    layout: family?.layouts[0] ?? kind,
  };
}

export function normaliseSectionDefinition(definition: SectionDefinition, kind: string): SectionDefinition {
  if (!isAllowedSectionType(definition.type)) {
    return fallbackSection(kind);
  }

  const family = familyForType(definition.type);

  return {
    type: definition.type,
    variant:
      family && family.variants.includes(definition.variant)
        ? definition.variant
        : (family?.variants[0] ?? 'standard'),
    layout:
      family && family.layouts.includes(definition.layout)
        ? definition.layout
        : (family?.layouts[0] ?? kind),
    actionLabel: definition.actionLabel,
  };
}
