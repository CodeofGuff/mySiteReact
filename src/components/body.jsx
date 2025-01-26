import { useEffect } from "react";
import characterDemo2020 from "../assets/audio/DavidGuffre_CharacterDemo2020.mp3";
import characterDemo2019 from "../assets/audio/DavidGuffre_2019CharDemos_v2_o.mp3";
import commercialDemo2020 from "../assets/audio/DavidGuffre_CommercialDemo2020.mp3";

export default function Body() {
  return (
    <main className="container">
      <div className="work-section">
        <div className="tech-icon-container">
          <div className="tech-icon-wrapper" title="HTML">
            <img src="/img/html.png" alt="HTML" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="CSS">
            <img src="/img/css.png" alt="CSS" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="JavaScript">
            <img src="/img/js.png" alt="JavaScript" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="TypeScript">
            <img src="/img/ts.png" alt="TypeScript" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="React/React Native">
            <img
              src="/img/react.png"
              alt="React/React Native"
              className="tech-icon"
            />
          </div>
          <div className="tech-icon-wrapper" title="Vite.js">
            <img src="/img/vite.png" alt="Vite.js" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="Expo">
            <img src="/img/expo.png" alt="Expo" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="Python">
            <img src="/img/python.png" alt="Python" className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper" title="Swift/SwiftUI">
            <img
              src="/img/swift.png"
              alt="Swift/SwiftUI"
              className="tech-icon"
            />
          </div>
        </div>
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

      <div className="section-divider"></div>

      <section id="vo-section" className="section-container">
        <div className="demo-reel">
          <h2>Voice Acting</h2>
          <h3>Voice Demos</h3>
          <div className="voice-demos">
            <div className="demo-item">
              <h3>Character Demo Main</h3>
              <audio controls className="audio-player" preload="metadata">
                <source src={characterDemo2020} type="audio/mpeg" />
              </audio>
            </div>
            <div className="demo-item">
              <h3>Character Demo</h3>
              <audio controls className="audio-player" preload="metadata">
                <source src={characterDemo2019} type="audio/mpeg" />
              </audio>
            </div>
            <div className="demo-item">
              <h3>Commercial Demo</h3>
              <audio controls className="audio-player" preload="metadata">
                <source src={commercialDemo2020} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>

        <div className="video-samples">
          <h2>Featured Work</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Wgu0kXS3WT8"
              title="Window Man"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/3TEX7Xptgxc"
              title="Boiling Steel"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/alIgd3bvIQ4"
              title="The Last Epoch"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
