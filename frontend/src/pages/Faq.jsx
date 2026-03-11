import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import PageMeta from '../components/SEO/PageMeta';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/SEO/SchemaOrg';
import { brandEntity } from '../data/brandEntity';
import { brandFaq } from '../data/brandFaq';
import { ChevronDown } from 'lucide-react';

const SITE_URL = 'https://apexnexon.tech';

const Faq = () => {
  usePageTitle('FAQ');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="bg-black min-h-screen pt-[80px]">
      <PageMeta
        title="Frequently Asked Questions"
        description={`${brandEntity.definition} Common questions: what we do, who we serve, and why choose ApexNexon.`}
      />
      <FAQPageSchema />
      <BreadcrumbListSchema items={[{ name: 'Home', url: SITE_URL }, { name: 'FAQ', url: `${SITE_URL}/faq` }]} />

      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="display-huge mb-6">
              Frequently Asked <span style={{ color: '#00FFD1' }}>Questions</span>
            </h1>
            <p className="body-large text-white/85 max-w-[700px] mb-12">
              Answers to common questions about ApexNexon, our services, and who we serve.
            </p>

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
                      className="px-6 pb-4"
                    >
                      <p className="body-medium text-white/85 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
