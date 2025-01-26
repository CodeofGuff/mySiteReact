import { useState, useEffect } from "react";
import "./App.css";
import MyWork from "./components/mywork";
import Footer from "./components/footer";
import Bio from "./components/bio";
import TechIcons from "./components/techicons";
import SocialLinks from "./components/sociallinks";

function App() {
  return (
    <>
          <SocialLinks />
      <Bio />
      <MyWork />
      <TechIcons />
      <Footer />
    </>
  );
}

export default App;
