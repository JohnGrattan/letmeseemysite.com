import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import ImgAngelFavicon from '../../images/Logos/img-angels-favicon';

const HeaderBlogPost = ({ className, hOne, author, date, timeToRead }) => {
  const data = useStaticQuery(graphql`
    query HeaderBlogPostQ {
      masthead: file(
        relativePath: {
          eq: "images/mdh-construction-blog-general-contractor-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      hOne={hOne}
      author={author}
      date={date}
      timeToRead={timeToRead}
      alt="John Grattan SEO & Web Design Blog post background in header - light bulb with web development icons and keywords"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-items-center justify-content-center">
            <h1 className="text-white font-weight-bold border border-primary rounded p-md-5 p-3 drop-shadow-dark text-lg">
              {hOne}
            </h1>
            <div className="row justify-content-center text-white mt-3">
              <ImgAngelFavicon className="mr-2 mt-1" />
              <p className="drop-shadow-dark">
                {author} • {date} • {timeToRead} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HeaderBlogPost;
