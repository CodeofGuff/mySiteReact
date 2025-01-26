import { useEffect, useState } from "react";
import profileImage from "../assets/img/profile.jpeg";

export default function Aside({ isMobile }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Add initial visibility
    const devBio = document.querySelector(".dev-bio");
    const voBio = document.querySelector(".vo-bio");

    if (devBio && voBio) {
      devBio.classList.add("visible");

      // Set up scroll handler
      const handleScroll = () => {
        const voSection = document.querySelector("#vo-section");
        if (voSection) {
          const voSectionTop = voSection.offsetTop;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= voSectionTop - 200) {
            devBio.classList.remove("visible");
            voBio.classList.add("visible");
          } else {
            devBio.classList.add("visible");
            voBio.classList.remove("visible");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <aside className={`side-bar-left ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <>
          <img
            src={profileImage}
            alt="Profile Image"
            className={`circular-image ${imageLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
          />
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
          <div className="welcome-cards-container">
            <div className="welcome-card dev-bio">
              <h1>Hello and Welcome!</h1>
              <p className="welcome-text">
                My name is David Guffre and am a self-taught software developer
                currently living in the <strong>Bay Area, CA.</strong>
              </p>
              <br />
              <p className="welcome-text">
                I'm an introvert with a lithium social battery thanks to being a
                Bartender of many years.
              </p>
              <br />
              <p className="welcome-text">
                I have a natural curiousity and always looking for
                <strong>what I don't know.</strong>
              </p>
              <br />
              <p className="welcome-text">
                My preferred web-dev framework is
                <strong>React / React Native</strong>, however I like to be
                proficient in all things software development.
              </p>
              <br />
              <p className="welcome-text">
                <strong>Fun Fact:</strong> I am voice actor and competitive
                gamer!
              </p>
            </div>

            <div className="welcome-card vo-bio">
              <h1>Voice Acting Journey</h1>
              <p className="welcome-text">
                The <strong>immersion</strong> a great voice actor provides to a
                project is my drive to perform.
              </p>
              <br />
              <p className="welcome-text">
                With over 8 years of experience in the industry, I've had the
                opportunity to work with a variety of clients and voice many
                characters.
              </p>
              <br />
              <p className="welcome-text">
                From warm and friendly to bold and dramatic, I have the
                versatility and range to capture the essence you are looking
                for.
              </p>
              <br />
              <p className="welcome-text">
                Thank you for visiting and I look forward to the opportunity to
                work with you on your next project!
              </p>
            </div>
            <div className="section-divider"></div>
            <p className="footer-text">
              © All rights reserved. Created by David Guffre
            </p>
          </div>
        </>
      ) : (
        <>
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
            src={profileImage}
            alt="Profile Image"
            className={`circular-image ${imageLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
          />
          <div className="welcome-cards-container">
            <div className="welcome-card dev-bio">
              <h1>Hello and Welcome!</h1>
              <p className="welcome-text">
                My name is David Guffre and am a self-taught software developer
                currently living in the <strong>Bay Area, CA.</strong>
              </p>
              <br />
              <p className="welcome-text">
                I'm an introvert with a lithium social battery thanks to being a
                Bartender of many years.
              </p>
              <br />
              <p className="welcome-text">
                I have a natural curiousity and always looking for
                <strong>what I don't know.</strong>
              </p>
              <br />
              <p className="welcome-text">
                My preferred web-dev framework is
                <strong>React / React Native</strong>, however I like to be
                proficient in all things software development.
              </p>
              <br />
              <p className="welcome-text">
                <strong>Fun Fact:</strong> I am voice actor and competitive
                gamer!
              </p>
            </div>

            <div className="welcome-card vo-bio">
              <h1>Voice Acting Journey</h1>
              <p className="welcome-text">
                The <strong>immersion</strong> a great voice actor provides to a
                project is my drive to perform.
              </p>
              <br />
              <p className="welcome-text">
                With over 8 years of experience in the industry, I've had the
                opportunity to work with a variety of clients and voice many
                characters.
              </p>
              <br />
              <p className="welcome-text">
                From warm and friendly to bold and dramatic, I have the
                versatility and range to capture the essence you are looking
                for.
              </p>
              <br />
              <p className="welcome-text">
                Thank you for visiting and I look forward to the opportunity to
                work with you on your next project!
              </p>
            </div>
            <div className="section-divider"></div>
            <p className="footer-text">
              © All rights reserved. Created by David Guffre
            </p>
          </div>
        </>
      )}
    </aside>
  );
}
