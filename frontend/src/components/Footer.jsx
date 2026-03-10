import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { servicesData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerServices = servicesData.slice(0, 6);

  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-16 pb-8 overflow-visible">
      <div className="max-w-[1400px] mx-auto px-[7.6923%] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 h-20 sm:h-24 md:h-28 lg:h-32 min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px]">
              <motion.span
                className="block h-full w-full bg-[#00FFD1]"
                style={{
                  WebkitMaskImage: 'url(/logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: [1, 1.08, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  opacity: { duration: 0.5, ease: 'easeOut' },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                aria-hidden
              />
              <img src="/logo.png" alt="ApexNexon" className="sr-only" />
            </Link>
            <p className="body-muted mb-6">
              Where Intelligence Meets Automation. Building the future of business with AI and intelligent systems. Visit us at apexnexon.tech.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-20">
            <h3 className="heading-3 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="footer-link inline-block py-0.5">Home</Link></li>
              <li><Link to="/services" className="footer-link inline-block py-0.5">Services</Link></li>
              <li><Link to="/solutions" className="footer-link inline-block py-0.5">Solutions</Link></li>
              <li><Link to="/case-studies" className="footer-link inline-block py-0.5">Case Studies</Link></li>
              <li><Link to="/about" className="footer-link inline-block py-0.5">About Us</Link></li>
              <li><Link to="/faq" className="footer-link inline-block py-0.5">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-20">
            <h3 className="heading-3 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="footer-link inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-3 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <a href="mailto:contact@apexnexon.tech" className="footer-link">contact@apexnexon.tech</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">Available on request</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">Serving clients globally • apexnexon.tech</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-white/60">
              © {currentYear} ApexNexon. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="body-small text-white/60 hover:text-[#00FFD1] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="body-small text-white/60 hover:text-[#00FFD1] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
