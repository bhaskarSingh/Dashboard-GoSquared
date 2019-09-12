import React from "react";
import { Global, css } from "@emotion/core";
const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-size: 18px;
            margin: 0;
            font-family: "Nunito", sans-serif;
          }
          body {
            background-color: #f1f1f1;
          }
        `}
      ></Global>
      <main>{children}</main>
    </>
  );
};

export default Layout;
