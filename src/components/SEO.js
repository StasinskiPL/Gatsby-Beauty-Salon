import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title = "Salon Pieknosci" }) => {
  return (
    <Helmet title={title} htmlAttributes={{ lang: "pl" }}>
      <meta name="description" content="Salon pięknosci"></meta>
    </Helmet>
  );
};

export default SEO;