import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen pt-[80px] flex items-center justify-center px-6">
      <Helmet>
        <title>Page Not Found | ApexNexon</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="max-w-md text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-white/10 mb-4">404</h1>
        <h2 className="heading-2 mb-4 text-white">Page not found</h2>
        <p className="body-medium text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved. Return to the homepage or browse our services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#00FFD1] text-black font-semibold hover:bg-[#00FFD1]/90 transition-colors"
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Our Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
