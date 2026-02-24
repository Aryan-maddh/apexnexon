/**
 * Canonical brand entity definition for ApexNexon.
 * Single source of truth for AI, search engines, and answer engines.
 * Use in: meta descriptions, Organization schema, About copy, AEO/FAQ.
 * The canonicalSentence must be reused verbatim across all outputs.
 */

/** One sentence only. Problem → audience → solution. Reuse verbatim everywhere. */
export const canonicalSentence = 'ApexNexon is an enterprise AI and automation company that builds custom intelligent systems—including OCR, RPA, and ML solutions—so mid-market and enterprise organizations can digitize operations, reduce manual work, and achieve measurable ROI.';

export const brandEntity = {
  name: 'ApexNexon',
  /** Same as canonicalSentence — do not paraphrase */
  definition: canonicalSentence,
  /** Short tagline for UI and schema slogan */
  tagline: 'Where Intelligence Meets Automation',
  /** Mission paragraph for About page (2–3 sentences) */
  missionParagraph: 'We design, build, and deploy custom AI and automation—not just advise. Our mission is to deliver production-ready systems that integrate with existing infrastructure and drive measurable business outcomes, typically within 8–12 weeks to first value and 3–5x ROI in the first year.',
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
