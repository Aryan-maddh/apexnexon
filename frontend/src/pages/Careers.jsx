import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import PageMeta from '../components/SEO/PageMeta';
import { BreadcrumbListSchema } from '../components/SEO/SchemaOrg';
import { ArrowRight, MapPin, Clock, Briefcase, ChevronDown } from 'lucide-react';

const SITE_URL = 'https://apexnexon.tech';
const APPLY_EMAIL = 'contact@apexnexon.tech';

const openRoles = [
  {
    id: 1,
    title: 'AI / ML Engineer',
    type: 'Full-time',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    experience: '2–4 years',
    description:
      'Build and deploy production-grade machine learning models, LLM pipelines, and AI automation systems for enterprise clients. Work on OCR, NLP, and computer vision projects.',
    responsibilities: [
      'Design and train ML/DL models (TensorFlow, PyTorch)',
      'Build data pipelines and MLOps workflows',
      'Integrate models into client products via APIs',
      'Work with LangChain, OpenAI, and custom LLM solutions',
    ],
    requirements: [
      'Strong Python skills and ML fundamentals',
      'Experience with TensorFlow or PyTorch',
      'Familiarity with REST API development (FastAPI preferred)',
      'Bonus: experience with OCR, NLP, or computer vision',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer (React + Node.js)',
    type: 'Full-time',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    experience: '2–4 years',
    description:
      'Build scalable web applications and enterprise software for clients across healthcare, finance, logistics, and e-commerce. Collaborate closely with design and backend teams.',
    responsibilities: [
      'Develop React frontends with clean, performant code',
      'Build Node.js / Express or FastAPI backends',
      'Integrate third-party APIs and services',
      'Maintain code quality through reviews and testing',
    ],
    requirements: [
      'Strong React.js and JavaScript/TypeScript skills',
      'Experience with REST APIs and databases (PostgreSQL, MongoDB)',
      'Understanding of Git workflows and CI/CD',
      'Bonus: experience with Next.js or React Native',
    ],
  },
  {
    id: 3,
    title: 'Odoo / Zoho Implementation Consultant',
    type: 'Full-time',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    experience: '1–3 years',
    description:
      'Implement, customize, and integrate Odoo ERP and Zoho suite for enterprise clients. Configure modules, write custom code, and manage end-to-end deployments.',
    responsibilities: [
      'Implement and configure Odoo modules (Sales, Purchase, Accounting, Inventory)',
      'Develop custom Odoo modules in Python/OWL',
      'Implement and integrate Zoho CRM, Books, Creator, and Analytics',
      'Handle client communication, requirements gathering, and training',
    ],
    requirements: [
      'Hands-on experience with Odoo or Zoho implementation',
      'Python knowledge for Odoo customization',
      'Understanding of business processes (accounting, sales, inventory)',
      'Bonus: Odoo certified or Zoho partner certification',
    ],
  },
  {
    id: 4,
    title: 'RPA Developer (UiPath / Automation Anywhere)',
    type: 'Full-time',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    experience: '1–3 years',
    description:
      'Design and develop robotic process automation bots to automate repetitive business workflows for clients in finance, logistics, and healthcare.',
    responsibilities: [
      'Build RPA bots using UiPath, Automation Anywhere, or Power Automate',
      'Analyze and document business processes for automation',
      'Test, deploy, and maintain automation workflows',
      'Integrate bots with ERPs, databases, and web applications',
    ],
    requirements: [
      'Experience with UiPath or Automation Anywhere',
      'Ability to read and write basic Python or VB scripts',
      'Strong analytical and problem-solving skills',
      'Bonus: RPA developer certification',
    ],
  },
  {
    id: 5,
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'Ahmedabad, Gujarat / Remote',
    experience: '1–3 years',
    description:
      'Drive new business for ApexNexon by identifying prospects, building relationships, and closing deals for AI, automation, Odoo, and software development services.',
    responsibilities: [
      'Generate and qualify leads through outreach, LinkedIn, and referrals',
      'Understand client needs and propose appropriate solutions',
      'Coordinate with the technical team to prepare proposals',
      'Manage the full sales cycle from lead to close',
    ],
    requirements: [
      'Experience in B2B sales, preferably in IT services or software',
      'Excellent communication and presentation skills',
      'Ability to understand and articulate technical solutions',
      'Bonus: experience selling ERP, AI, or automation solutions',
    ],
  },
];

const perks = [
  { title: 'Hybrid Work', description: 'Flexible work-from-home and office days.' },
  { title: 'Real Projects', description: 'Work on live enterprise systems, not internal tools.' },
  { title: 'Learning Budget', description: 'Annual budget for certifications and courses.' },
  { title: 'Fast Growth', description: 'Small team means big ownership and fast promotions.' },
  { title: 'Competitive Pay', description: 'Market-competitive salaries reviewed annually.' },
  { title: 'Direct Impact', description: 'Your work reaches enterprise clients from day one.' },
];

const RoleCard = ({ role }) => {
  const [open, setOpen] = useState(false);
  const subject = encodeURIComponent(`Application for ${role.title} – ApexNexon`);
  const body = encodeURIComponent(
    `Hi ApexNexon team,\n\nI am interested in the ${role.title} position.\n\nPlease find my details below:\n\nName:\nExperience:\nLinkedIn / Portfolio:\n\nLooking forward to connecting.\n\nRegards`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-white/[0.03] hover:border-[#00FFD1]/30 transition-colors"
    >
      {/* Header */}
      <div
        className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-3">{role.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-[#00FFD1]" />
              {role.type}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#00FFD1]" />
              {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#00FFD1]" />
              {role.experience} experience
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00FFD1] text-black text-sm font-semibold hover:bg-[#00FFD1]/90 transition-colors whitespace-nowrap"
          >
            Apply Now
            <ArrowRight size={16} />
          </a>
          <ChevronDown
            size={20}
            className={`text-white/50 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expanded Details */}
      {open && (
        <div className="px-6 lg:px-8 pb-8 border-t border-white/10 pt-6 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white/80 text-base leading-relaxed mb-6">{role.description}</p>
            <h4 className="text-[#00FFD1] text-sm font-semibold uppercase tracking-wider mb-3">Responsibilities</h4>
            <ul className="space-y-2">
              {role.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-white/75 text-sm">
                  <span className="text-[#00FFD1] mt-1 flex-shrink-0">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#00FFD1] text-sm font-semibold uppercase tracking-wider mb-3">Requirements</h4>
            <ul className="space-y-2">
              {role.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-white/75 text-sm">
                  <span className="text-[#00FFD1] mt-1 flex-shrink-0">•</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm mb-3">Send your resume and portfolio to:</p>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`}
                className="text-[#00FFD1] text-sm font-medium hover:underline"
              >
                {APPLY_EMAIL}
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Careers = () => {
  usePageTitle('Careers');

  return (
    <div className="bg-black min-h-screen pt-[80px]">
      <PageMeta
        fullTitle="Careers at ApexNexon | Join Our AI & Automation Team"
        description="Join ApexNexon and build AI, RPA, Odoo, and custom software solutions for enterprises. Open roles in AI/ML engineering, full stack development, Odoo/Zoho consulting, and business development."
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Careers', url: `${SITE_URL}/careers` },
        ]}
      />

      {/* Hero */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            <div className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6">
              <span className="body-medium text-[#00FFD1]">We're Hiring</span>
            </div>
            <h1 className="display-huge mb-6">
              Build the Future of <span style={{ color: '#00FFD1' }}>Enterprise AI</span>
            </h1>
            <p className="body-large text-white/85 mb-8 leading-relaxed">
              At ApexNexon we build production-grade AI, automation, Odoo ERP, and Zoho solutions for enterprises across healthcare, finance, logistics, and e-commerce. If you want real ownership, fast growth, and work that ships to real clients — you'll fit right in.
            </p>
            <a
              href={`mailto:${APPLY_EMAIL}?subject=Open Application – ApexNexon`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FFD1] text-black font-semibold hover:bg-[#00FFD1]/90 transition-colors"
            >
              Send Open Application
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-medium mb-10"
          >
            Why Work With Us
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 border border-white/10 bg-white/[0.03]"
              >
                <h3 className="text-[#00FFD1] font-semibold mb-2">{perk.title}</h3>
                <p className="body-medium text-white/75">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="display-medium mb-3">Open Positions</h2>
            <p className="body-large text-white/70">{openRoles.length} open roles · Ahmedabad, Gujarat</p>
          </motion.div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#00FFD1]/10 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="display-large mb-4">Don't See Your Role?</h2>
              <p className="body-large text-white/80 mb-8 max-w-[600px] mx-auto">
                We're always looking for talented people. Send us your resume and tell us how you can contribute.
              </p>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=Open Application – ApexNexon`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FFD1] text-black font-semibold hover:bg-[#00FFD1]/90 transition-colors"
              >
                Send Open Application
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
