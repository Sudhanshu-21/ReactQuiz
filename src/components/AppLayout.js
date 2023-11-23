import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
