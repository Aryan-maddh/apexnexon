import React, { Suspense } from 'react';
// import Spline from '@splinetool/react-spline'; // Removed static import
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* ... (keep existing background pattern) ... */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%'
          }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] w-full relative z-10 py-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center min-h-0">
          {/* Content: same order on mobile and desktop (left column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            {/* ... (keep existing content up to buttons) ... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6"
            >
              <span className="text-sm sm:text-base font-medium text-[#00FFD1]">Where Intelligence Meets Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-bold leading-tight mb-6 text-white"
            >
              <span className="text-white">Transform Your Business with</span>{' '}
              <span style={{ color: '#00FFD1' }}>AI & Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 max-w-[600px] leading-relaxed"
              id="hero-value-prop"
            >
              ApexNexon is an enterprise AI and automation company. We build custom intelligent systems—including OCR, RPA, and ML solutions—so mid-market and enterprise organizations can digitize operations, reduce manual work, and achieve measurable ROI. Build intelligent systems, automate operations, and scale with cutting-edge AI and custom software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies" className="btn-secondary w-full sm:w-auto justify-center">
                View Case Studies
                <PlayCircle size={20} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 sm:pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00FFD1] mb-2">50+</div>
                <div className="text-xs sm:text-sm text-white/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00FFD1] mb-2">98%</div>
                <div className="text-xs sm:text-sm text-white/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00FFD1] mb-2">300%</div>
                <div className="text-xs sm:text-sm text-white/60">Avg ROI</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Same 3D ball on all viewports – height/scale tuned so mobile matches desktop feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[380px] sm:h-[480px] lg:h-[700px] flex items-center justify-center order-2 px-2 sm:px-4 lg:pl-4 lg:pr-0"
          >
            <div className="w-full h-full relative flex items-center justify-center" style={{ overflow: 'visible' }}>
              <div className="hero-spline-wrap w-full h-full origin-center scale-[0.82] sm:scale-[0.88] md:scale-95 lg:scale-100 min-h-[320px]">
                <Suspense fallback={<div className="animate-pulse bg-white/5 w-full h-full rounded-full min-h-[320px]" />}>
                  <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
                </Suspense>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient glow – visible on mobile and desktop for same feel */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00FFD1]/10 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#00FFD1]/8 blur-[80px] pointer-events-none lg:hidden" aria-hidden />
    </section>
  );
};

export default HeroSection;
