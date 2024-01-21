import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/navbar";
import Navbarbottom from "../components/navbar/navbar-bottom";
import Footer from "../components/footer/footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Navbarbottom />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
