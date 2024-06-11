import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Ifreks - Trading And Education
      </title>
      <meta
        name="description"
        content="Ifreks - Trading And Education"
      />
    </Helmet>
  );
};

export default HelmetReact;
