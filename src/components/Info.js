import React from "react";
import Image from "gatsby-image";

const Info = ({ title, text, imageUrl, reverse }) => {
  return (
    <article className="info">
      <div className={`info-inner ${reverse ? "reverse" : ""}`}>
        <div className="info-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <Image
          fluid={imageUrl.childrenImageSharp[0].fluid}
          className={`info-image ${reverse ? "reverse" : ""}`}
        />
      </div>
    </article>
  );
};

export default Info;
