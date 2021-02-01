import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import GalleryImage from "./GalleryImage";

const GalleryComponent = ({page=false,propImages}) => {
  const { allFile } = useStaticQuery(query);
  let images = allFile.nodes.map((node) => node.childrenImageSharp[0].fluid);

  if(propImages){
      console.log(propImages)
    images = propImages;
  }
  return (
    <section className="gallery">
      <div className="gallery-inner">
        <div className="gallery-title">
          <h2>Galeria</h2>
          <div className="gallery-title-underline"></div>
        </div>
        <div className="gallery-list">
          {images.map((img, index) => (
            <GalleryImage fluid={img} key={index} />
          ))}
        </div>
        {!page &&
        <div className="gallery-link-wrapper">
        <Link to="/galeria" className="gallery-btn">
          Zobacz więcej
        </Link>
        </div>
        }
      </div>
    </section>
  );
};

const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/^about/" } }) {
      nodes {
        childrenImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default GalleryComponent;
