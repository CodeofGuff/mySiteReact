import { useState } from "react";

export default function Bio() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="profile-image-container">
        <img
          src="/img/profile.jpeg"
          alt="Profile Image"
          className={`profile-image ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
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
