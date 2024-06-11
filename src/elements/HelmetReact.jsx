import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Ifreks - Exchange And Trading Education
      </title>
      <meta
        name="description"
        content="Ifreks - Exchange And Trading Education"
      />
    </Helmet>
  );
};

export default HelmetReact;
