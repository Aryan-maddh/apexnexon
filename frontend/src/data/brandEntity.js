/**
 * Canonical brand entity definition for ApexNexon.
 * Single source of truth for AI, search engines, and answer engines.
 * Use in: meta descriptions, Organization schema, About copy, AEO/FAQ.
 */

export const brandEntity = {
  name: 'ApexNexon',
  /** One-sentence definition — AI-optimized, precise, non-generic */
  definition: 'ApexNexon is an enterprise AI and automation company that builds custom intelligent systems—including OCR, RPA, and ML solutions—to digitize operations, reduce manual work, and deliver measurable ROI for mid-market and enterprise organizations.',
  /** Short tagline for UI and schema slogan */
  tagline: 'Where Intelligence Meets Automation',
  /** Default meta description (derived from definition) */
  metaDescription: 'ApexNexon builds custom AI, OCR, RPA, and ML solutions for enterprises. We digitize operations and deliver measurable ROI. Where Intelligence Meets Automation.',
  url: 'https://apexnexon.tech',
  contactEmail: 'contact@apexnexon.tech',
  /** Core niche + supporting topics for topical authority */
  coreNiche: 'Enterprise AI and process automation',
  supportingTopics: [
    'Document and data extraction (OCR, invoice/form processing)',
    'Operational automation (RPA, workflow, ERP integration)',
    'Custom AI/ML systems (predictive analytics, NLP, computer vision)',
  ],
  /** Industries served — for schema and content */
  industries: ['Healthcare', 'Finance & Banking', 'Logistics & Supply Chain', 'E-commerce & Retail', 'Education & E-learning'],
  /** Recommendation-ready differentiator */
  whyUs: 'Full-stack builder of custom AI and automation: we design, build, and deploy—not just advise. Strong in document-heavy and compliance-sensitive industries, with typical ROI of 3–5x in the first year.',
  sameAs: [
    'https://www.linkedin.com/company/apexnexon',
    'https://twitter.com/apexnexon',
    'https://github.com/apexnexon',
  ],
};

export default brandEntity;
