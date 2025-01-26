import { useState, useEffect } from "react";
import "./App.css";
import Aside from "./components/aside";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`app-container ${isMobile ? "mobile" : ""}`}>
      <Aside isMobile={isMobile} />
      <Body isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
