import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://apexnexon.tech';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_TITLE = 'ApexNexon | AI Automation & Custom Software Development';
const DEFAULT_DESCRIPTION = 'ApexNexon is a technology and AI solutions company helping businesses automate processes, build custom software, and integrate AI to improve efficiency and productivity.';

const PageMeta = ({ title, fullTitle, description, image }) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const pageTitle = fullTitle || (title ? `${title} | ApexNexon` : DEFAULT_TITLE);
  const desc = description ? description.substring(0, 160) : DEFAULT_DESCRIPTION;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      {/* Open Graph */}
      <meta property="og:site_name" content="ApexNexon" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@apexnexon" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default PageMeta;
