import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <SimpleFooter />
    </div>
  );
}
