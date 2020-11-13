import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  canonicalLink,
  image,
  siteUrl,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const structuredDataLocalBusiness = `
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutomotiveBusiness",
        "name": "Angels Towing - Junk Cars Mass",
        "url": "https://junkcarsmass.com/",
        "sameAs": [
          "https://www.facebook.com/ANGELSAUTOANDTOWING"
        ],
        "logo": "https://junkcarsmass.com/#imagelogo",
        "image": "https://junkcarsmass.com/#imagebusiness",
        "description": "Angels Towing - Junk Car Mass will pay the highest amount of CASH for your junk car. We buy any vehicle make, model, and condition. Call (617) 997-6510 for your quote!",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "87 County Rd",
          "addressLocality": "Plympton",
          "addressRegion": "MA",
          "postalCode": "02367",
          "addressCountry": "United States"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.988829",
          "longitude": "-70.807664"
        },
        "hasMap": "https://www.google.com/maps?cid=13760398526388246013",
        "openingHours": "Mo, Tu, We, Th 07:00-05:00 Fr 07:00-02:00",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Phone",
          "telephone": "(781) 936-3974"
        }
      }
    ]
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    >
      {/* REMOVE WHEN GOING LIVE */}
      <meta name="robots" content="noindex"></meta>

      <link rel="canonical" href={canonicalLink} />

      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{structuredDataLocalBusiness}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
