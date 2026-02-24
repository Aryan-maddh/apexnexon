import React from 'react';
import { Helmet } from 'react-helmet';
import { brandEntity } from '../../data/brandEntity';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandEntity.name,
    "url": brandEntity.url,
    "logo": "https://apexnexon.tech/logo.png",
    "description": brandEntity.definition,
    "slogan": brandEntity.tagline,
    "knowsAbout": brandEntity.supportingTopics,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": brandEntity.contactEmail,
      "contactType": "customer service",
      "url": brandEntity.url
    },
    "sameAs": brandEntity.sameAs
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
