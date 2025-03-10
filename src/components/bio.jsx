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
          <h1 className="welcome-card-h1">Hello and Welcome!</h1>
          <div className={`welcome-card dev-bio visible`}>
            <p className="welcome-text">
              My name is David Guffre and am a self-taught software developer
              <br />
              currently living in the <strong>Bay Area, CA.</strong>
            </p>
            <p className="welcome-text">
              I&apos;m an introvert with a lithium social battery thanks to
              being a Bartender of many years.
            </p>
            <p className="welcome-text">
              I have a natural curiosity and always looking for{" "}
              <strong>what I don&apos;t know.</strong>
            </p>
            <p className="welcome-text">
              My preferred web-dev library is currently <strong>React </strong>
              (with some React Native), however
              <br /> I like to be proficient in all things software development.
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
