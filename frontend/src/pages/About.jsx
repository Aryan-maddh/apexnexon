import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { techStackData } from '../data/mock';
import { Target, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/SEO/PageMeta';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/SEO/SchemaOrg';
import { brandEntity, canonicalSentence } from '../data/brandEntity';
import { brandFaq } from '../data/brandFaq';

const SITE_URL = 'https://apexnexon.tech';

const About = () => {
  usePageTitle('About');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="bg-black min-h-screen pt-[80px]">
      <PageMeta
        fullTitle="About ApexNexon | Technology & AI Solutions Company"
        description="ApexNexon is a technology and AI solutions company. We help businesses automate processes, build custom software, and integrate AI into their operations."
      />
      <FAQPageSchema />
      <BreadcrumbListSchema items={[{ name: 'Home', url: SITE_URL }, { name: 'About Us', url: `${SITE_URL}/about` }]} />

      {/* Hero: Canonical entity definition */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[900px]"
          >
            <div className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6">
              <span className="body-medium text-[#00FFD1]">About ApexNexon</span>
            </div>
            <h1 className="display-huge mb-6">
              <span style={{ color: '#00FFD1' }}>Who We Are</span>
            </h1>
            <p className="body-large text-white/95 mb-6 leading-relaxed">
              {canonicalSentence}
            </p>
            <p className="body-large text-white/85 leading-relaxed">
              {brandEntity.missionParagraph}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-medium mb-6">What ApexNexon Does</h2>
          <p className="body-large text-white/85 mb-6 max-w-[800px]">
            We design, build, and deploy custom systems in three areas:
          </p>
          <ul className="space-y-3 max-w-[800px]">
            {brandEntity.supportingTopics.map((topic, i) => (
              <li key={i} className="body-medium text-white/85 flex items-start gap-2">
                <span className="text-[#00FFD1] mt-1">•</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-medium mb-6">Who We Serve</h2>
          <p className="body-large text-white/85 max-w-[800px] mb-4">
            Mid-market and enterprise organizations that need custom AI or automation—not off-the-shelf SaaS. We focus on industries where document processing, compliance, and operational scale matter:
          </p>
          <p className="body-medium text-white/80">
            {brandEntity.industries.join(', ')}.
          </p>
        </div>
      </section>

      {/* What we are not */}
      <section className="py-16 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-medium mb-6">What ApexNexon Is Not</h2>
          <ul className="space-y-2 max-w-[800px]">
            <li className="body-medium text-white/85">A SaaS product company—we build custom solutions you own.</li>
            <li className="body-medium text-white/85">An advisory-only consultancy—we design, build, and deploy.</li>
            <li className="body-medium text-white/85">A generic development shop—we specialize in AI, OCR, RPA, and process automation.</li>
          </ul>
        </div>
      </section>

      {/* Why ApexNexon */}
      <section className="py-16 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-medium mb-6">Why ApexNexon</h2>
          <p className="body-large text-white/85 max-w-[800px] leading-relaxed">
            {brandEntity.whyUs}
          </p>
        </div>
      </section>

      {/* FAQ / AEO */}
      <section className="py-16 relative bg-white/[0.02]" id="faq">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-medium mb-8">Frequently Asked Questions</h2>
          <div className="max-w-[800px] space-y-2">
            {brandFaq.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left body-medium font-medium text-white flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`text-[#00FFD1] flex-shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="body-medium text-white/85 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-large mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Client Success', description: 'We measure our success by the results we deliver for your business.' },
              { title: 'Transparency', description: 'Clear communication, honest timelines, and no surprises.' },
              { title: 'Full-Stack Ownership', description: 'We design, build, and deploy—you get a production-ready system, not a report.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <h3 className="heading-2 mb-3 text-[#00FFD1]">{value.title}</h3>
                <p className="body-medium text-white/85">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="display-large mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStackData.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 text-center"
              >
                <p className="body-medium font-semibold text-white">{tech.name}</p>
                <p className="body-small text-white/60 mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFD1]/10 blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="display-large mb-6">Get in Touch</h2>
              <p className="body-large text-white/85 mb-8 max-w-[600px] mx-auto">
                Ready to digitize operations and achieve measurable ROI? Contact us for a free consultation.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact ApexNexon
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
