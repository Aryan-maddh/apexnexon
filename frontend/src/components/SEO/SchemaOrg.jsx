import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brandEntity } from '../../data/brandEntity';
import { brandFaq } from '../../data/brandFaq';

const SITE_URL = 'https://apexnexon.tech';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandEntity.name,
    "url": brandEntity.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.png`,
      "width": 200,
      "height": 60
    },
    "description": brandEntity.definition,
    "slogan": brandEntity.tagline,
    "email": brandEntity.contactEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": brandEntity.address.streetAddress,
      "addressLocality": brandEntity.address.addressLocality,
      "addressRegion": brandEntity.address.addressRegion,
      "postalCode": brandEntity.address.postalCode,
      "addressCountry": brandEntity.address.addressCountry
    },
    "sameAs": brandEntity.sameAs,
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Robotic Process Automation",
      "OCR Document Processing",
      "Odoo ERP Implementation",
      "Zoho CRM Implementation",
      "Custom Software Development",
      "Web and Mobile App Development",
      "Shopify Development",
      "Cloud DevOps",
      "Business Process Automation"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": brandEntity.contactEmail,
      "url": `${SITE_URL}/contact`,
      "availableLanguage": "English"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** WebSite schema for homepage. */
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brandEntity.name,
    "url": SITE_URL,
    "description": brandEntity.definition,
    "publisher": {
      "@type": "Organization",
      "name": brandEntity.name,
      "url": brandEntity.url
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

/** Service schema. Pass name, description, url. */
export const ServiceSchema = ({ name, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": brandEntity.name,
      "url": brandEntity.url
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${SITE_URL}/contact`
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** HowTo schema for service approach steps. Pass name (string) and steps ([{ title, description }]). */
export const HowToSchema = ({ name, description, steps }) => {
  if (!steps || steps.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.title,
      "text": step.description
    }))
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/** BlogPosting schema. Pass title, description, datePublished, dateModified, author, image, url, articleBody. */
export const BlogPostSchema = ({ title, description, datePublished, dateModified, author, image, url, articleBody }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image
    },
    "author": {
      "@type": "Person",
      "name": author || "ApexNexon Team",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": brandEntity.name,
      "url": brandEntity.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
        "width": 200,
        "height": 60
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": "en-US",
    "url": url || SITE_URL,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || SITE_URL
    },
    ...(articleBody ? { "articleBody": articleBody } : {})
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * FAQPage schema. Pass items: [{ question, answer }].
 * Defaults to brandFaq if no items provided.
 * Must match visible FAQ content exactly.
 */
export const FAQPageSchema = ({ items }) => {
  const faqItems = items && items.length > 0 ? items : brandFaq;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
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

/**
 * AggregateRating + Review schema for testimonials.
 * Pass reviews: [{ author, reviewBody, ratingValue }] and itemName (the thing being reviewed).
 */
export const AggregateRatingSchema = ({ reviews, itemName }) => {
  if (!reviews || reviews.length === 0) return null;
  const avgRating = reviews.reduce((sum, r) => sum + (r.ratingValue || 5), 0) / reviews.length;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": itemName || brandEntity.name,
    "url": SITE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "reviewBody": r.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.ratingValue || 5,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
