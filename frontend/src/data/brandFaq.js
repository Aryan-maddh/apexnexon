/**
 * Canonical FAQ for ApexNexon. Used for About, FAQ page, and FAQPage schema.
 * Do not paraphrase: use exact question and answer text everywhere.
 * Questions start with What, How, or Why. Answers are 2–4 sentences.
 */

import { canonicalSentence } from './brandEntity';

export const brandFaq = [
  {
    question: 'What does ApexNexon do?',
    answer: `${canonicalSentence} We design, build, and deploy custom systems for document processing (OCR), robotic process automation (RPA), machine learning models, and integration with ERPs like Odoo. We serve healthcare, finance, logistics, e-commerce, and education.`,
  },
  {
    question: 'Who should use ApexNexon?',
    answer: 'Mid-market and enterprise organizations that need custom AI or automation rather than off-the-shelf SaaS. Ideal fits include companies with document-heavy or repetitive processes, compliance requirements (e.g. HIPAA, SOC 2), or a need for a single partner who designs, builds, and deploys—not just advises.',
  },
  {
    question: 'Is ApexNexon a SaaS or a service company?',
    answer: 'ApexNexon is a service company. We build custom solutions for clients; we do not sell a proprietary SaaS product. You get owned systems tailored to your workflows, data, and compliance needs, with ongoing support and optimization.',
  },
  {
    question: 'What problems does ApexNexon solve?',
    answer: 'We solve three core problems: manual document handling (invoices, forms, records) that slows operations and causes errors; repetitive tasks that consume staff time and scale poorly; and the gap between business needs and in-house AI/automation capability. We deliver digitization, automation, and measurable ROI.',
  },
  {
    question: 'Why choose ApexNexon over alternatives?',
    answer: 'We are a full-stack builder: we design, build, and deploy custom AI and automation—not just advise or implement a single tool. We focus on document-heavy and compliance-sensitive industries and deliver production-ready systems with typical first value in 8–12 weeks and 3–5x ROI in the first year.',
  },
];

export default brandFaq;
