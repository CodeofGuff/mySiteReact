import { useEffect } from "react";

export default function MyWork() {
  return (
    <>
      <div className="work-section">
        <h3 className="section-label">My Work</h3>
        <div className="links-grid">
          <a href="#vo-section" className="work-link">
            <h3>Voice Acting</h3>
            <p>My professional voice portfolio</p>
          </a>
          <a
            href="https://squadplanner.io/"
            className="work-link"
            target="_blank"
          >
            <h3>Squad Planner</h3>
            <p>Strategy mapping tool for Squad players</p>
          </a>
          <a href="https://rltw.net" className="work-link" target="_blank">
            <h3>Recon's Website</h3>
            <p>Website for a gaming community</p>
          </a>
          <a
            href="https://gufftarot.netlify.app"
            className="work-link"
            target="_blank"
          >
            <h3>Tarot App</h3>
            <p>Single card Tarot reader, for daily fortunes</p>
          </a>
        </div>
      </div>
    </>
  );
}
