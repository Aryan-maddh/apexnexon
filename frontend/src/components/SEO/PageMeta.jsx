import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const PageMeta = ({ title, description }) => {
    const location = useLocation();
    const canonicalUrl = `https://apexnexon.tech${location.pathname}`;

    return (
        <Helmet>
            <title>{title ? `${title} | ApexNexon` : 'ApexNexon | AI & Automation Solutions'}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default PageMeta;
