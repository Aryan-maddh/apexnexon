import React from 'react';
import { Helmet } from 'react-helmet';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexNexon",
    "url": "https://apexnexon.tech",
    "logo": "https://apexnexon.tech/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@apexnexon.tech",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/apexnexon",
      "https://twitter.com/apexnexon",
      "https://github.com/apexnexon"
    ]
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
      "name": "ApexNexon"
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
      "name": "ApexNexon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexnexon.tech/favicon.svg"
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
