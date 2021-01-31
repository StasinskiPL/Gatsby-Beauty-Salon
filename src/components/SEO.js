import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title = "default title" }) => {
  return (
    <Helmet title={title} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content="description"></meta>
    </Helmet>
  );
};

export default SEO;