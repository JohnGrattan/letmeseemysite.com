import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import About__Body from '../components/Page__About/About__Body';

const CopyrightPage = () => {
  const data = useStaticQuery(graphql`
    query CopyrightPageQ {
      masthead: file(
        relativePath: {
          eq: "images/404-error-mdh-construction-general-contractor-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title="Oops! This Page Cannot Be Found | MDH Construction"
        description="404 Not Found | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/404/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Oops...Something Went Wrong!"
        hTwo="This page cannot be found"
        alt="404 Error - Oops! This Page Cannot Be Found"
      />
      <About__Body />
    </Layout>
  );
};

export default CopyrightPage;
