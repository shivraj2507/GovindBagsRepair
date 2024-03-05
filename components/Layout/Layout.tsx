import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

const Layout: React.FC<{ children: JSX.Element | React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
