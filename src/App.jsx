import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import SocialLinks from "./components/sociallinks";
import Bio from "./components/bio";
import MyWork from "./components/mywork";
import TechIcons from "./components/techicons";
import Footer from "./components/footer";
import VoiceActing from "./components/vo";

function App() {
  return (
    <Router>
      <SocialLinks />
      <Routes>
        <Route path="/" element={
          <>
            <Bio />
            <MyWork />
            <TechIcons />
          </>
        } />
        <Route path="/vo" element={<VoiceActing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
