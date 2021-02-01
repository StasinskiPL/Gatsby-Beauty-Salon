import React from "react";
import Image from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const Hero = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query);
  const { fixed } = nodes[0].childrenImageSharp[0];
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.h1 variants={container} initial="hidden" animate="show">
            <span>Salon</span>
            <span>Urody</span>
          </motion.h1>
          <Link to="/kontakt" className="hero-text-btn">
            Zarezerwuj Spotkanie
          </Link>
        </div>
        <div className="hero-image-wrapper">
        <Image fixed={fixed} className="hero-image" />
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "hero.webp" } }) {
      nodes {
        childrenImageSharp {
          fixed(height: 650) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default Hero;
