import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Menu />
      <div className="container px-0 mx-auto w-100 min-vh-100" >{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
