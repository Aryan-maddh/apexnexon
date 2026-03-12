/**
 * Canonical brand entity definition for ApexNexon.
 * Single source of truth for AI, search engines, and answer engines.
 * Use in: meta descriptions, Organization schema, About copy, AEO/FAQ.
 * The canonicalSentence must be reused verbatim across all outputs.
 */

/** One sentence only. Problem → audience → solution. Reuse verbatim everywhere. */
export const canonicalSentence = 'ApexNexon is an enterprise technology company that builds custom AI, OCR, RPA, Odoo ERP, and Zoho solutions—as well as web, mobile, and cloud systems—so mid-market and enterprise organizations can digitize operations, reduce manual work, and achieve measurable ROI.';

export const brandEntity = {
  name: 'ApexNexon',
  /** Same as canonicalSentence — do not paraphrase */
  definition: canonicalSentence,
  /** Short tagline for UI and schema slogan */
  tagline: 'Where Intelligence Meets Automation',
  /** Mission paragraph for About page (2–3 sentences) */
  missionParagraph: 'We design, build, and deploy custom AI and automation—not just advise. Our mission is to deliver production-ready systems that integrate with existing infrastructure and drive measurable business outcomes, typically within 8–12 weeks to first value and 3–5x ROI in the first year.',
  /** Default meta description (derived from definition) */
  metaDescription: 'ApexNexon builds custom AI, OCR, RPA, Odoo ERP, Zoho, and web solutions for enterprises. We digitize operations and deliver measurable ROI. Where Intelligence Meets Automation.',
  url: 'https://apexnexon.tech',
  contactEmail: 'contact@apexnexon.tech',
  address: {
    streetAddress: 'Drive-in Road, Memnagar',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380052',
    addressCountry: 'IN'
  },
  /** Core niche + supporting topics for topical authority */
  coreNiche: 'Enterprise AI, ERP, and process automation',
  supportingTopics: [
    'Document and data extraction (OCR, invoice and form processing)',
    'Business process automation (RPA and workflow automation)',
    'Odoo ERP implementation, customization, and integration',
    'Zoho implementation, customization, and integration (CRM, Books, Creator, Analytics)',
    'Custom AI/ML systems (predictive analytics, NLP, computer vision)',
    'Custom software and web development (web apps, mobile apps, Shopify, cloud and DevOps)',
  ],
  /** Industries served — for schema and content */
  industries: ['Healthcare', 'Finance & Banking', 'Logistics & Supply Chain', 'E-commerce & Retail', 'Education & E-learning'],
  /** Recommendation-ready differentiator */
  whyUs: 'Full-stack builder of custom AI, automation, Odoo ERP, and Zoho solutions: we design, build, and deploy—not just advise. Strong in document-heavy and compliance-sensitive industries, with typical ROI of 3–5x in the first year.',
  sameAs: [
    'https://www.linkedin.com/company/apex-nexon/',
    'https://twitter.com/apexnexon',
    'https://github.com/apexnexon',
  ],
};

export default brandEntity;
