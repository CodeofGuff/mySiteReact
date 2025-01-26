import { useState } from "react";

export default function Bio() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="profile-image-container">
        <div className="socials-links-grid">
          <a
            href="https://x.com/iamguff"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Follow me on X"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://bsky.app/profile/iamguff.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Follow me on Bluesky"
          >
            <i className="fas fa-cloud"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/davidguffre/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Connect on LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.twitch.tv/guffre"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Watch on Twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>
          <a
            href="https://github.com/CodeofGuff"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Follow me on GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <img
          src="/img/profile.jpeg"
          alt="Profile Image"
          className={`profile-image ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />

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
      </div>

      <div className="title-bar">
        <div className="welcome-cards-container">
          <div className={`welcome-card dev-bio visible`}>
            <h1>Hello and Welcome!</h1>
            <p className="welcome-text">
              My name is David Guffre and am a self-taught software developer
              currently living in the <strong>Bay Area, CA.</strong>
            </p>
            <p className="welcome-text">
              I'm an introvert with a lithium social battery thanks to being a
              Bartender of many years.
            </p>
            <p className="welcome-text">
              I have a natural curiousity and always looking for{" "}
              <strong>what I don't know.</strong>
            </p>
            <p className="welcome-text">
              My preferred web-dev framework is{" "}
              <strong>React / React Native</strong>, however I like to be
              proficient in all things software development.
            </p>
            <p className="welcome-text">
              <strong>Fun Fact:</strong> I am voice actor and competitive gamer!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
