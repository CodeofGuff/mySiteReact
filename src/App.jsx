import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/body";
import Footer from "./components/footer";
import Bio from "./components/bio";

function App() {
  return (
    <>
      <Bio />
      <Body />
      <Footer />
    </>
  );
}

export default App;
