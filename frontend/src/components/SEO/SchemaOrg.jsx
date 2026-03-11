import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brandEntity } from '../../data/brandEntity';
import { brandFaq } from '../../data/brandFaq';

const SITE_URL = 'https://apexnexon.tech';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexNexon",
    "url": "https://apexnexon.tech",
    "logo": "https://apexnexon.tech/logo.png",
    "description": "ApexNexon is a technology and AI solutions company that helps businesses automate processes, build custom software, and integrate AI into their operations.",
    "sameAs": [
      "https://linkedin.com/company/apexnexon",
      "https://twitter.com/apexnexon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://apexnexon.tech/contact"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** WebSite schema with SearchAction for sitelinks search box (optional). Include on homepage. */
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brandEntity.name,
    "url": SITE_URL,
    "description": brandEntity.definition,
    "publisher": { "@type": "Organization", "name": brandEntity.name, "url": brandEntity.url },
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/contact?q={search_term_string}` },
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** BreadcrumbList for inner pages. Pass items: [{ name, url }, ...] */
export const BreadcrumbListSchema = ({ items }) => {
  if (!items || items.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** Speakable schema for key content (e.g. homepage hero). Pass cssSelector string or array. */
export const SpeakableSchema = ({ cssSelector }) => {
  if (!cssSelector) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": Array.isArray(cssSelector) ? cssSelector : [cssSelector]
    }
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const ServiceSchema = ({ name, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": brandEntity.name,
      "url": brandEntity.url
    },
    "description": description,
    "url": url
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const BlogPostSchema = ({ title, description, datePublished, author, image }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author || "ApexNexon Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": brandEntity.name,
      "url": brandEntity.url,
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexnexon.tech/logo.png"
      }
    },
    "datePublished": datePublished,
    "description": description
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** FAQPage schema. Must match visible FAQ content exactly. */
export const FAQPageSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: brandFaq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
