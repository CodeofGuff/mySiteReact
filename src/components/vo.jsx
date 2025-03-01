import { useState } from "react";
import { Link } from "react-router-dom";
import characterDemo2020 from "../assets/audio/DavidGuffre_CharacterDemo2020.mp3";
import characterDemo2019 from "../assets/audio/DavidGuffre_2019CharDemos_v2_o.mp3";
import commercialDemo2020 from "../assets/audio/DavidGuffre_CommercialDemo2020.mp3";

const Vo = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      id="vo-section"
      className="section-container"
      aria-label="Voice Acting Portfolio"
    >
      <div
        className="profile-image-container"
        role="img"
        aria-label="Profile Image"
      >
        <img
          src="/img/profile.jpeg"
          alt="David Guffre's Profile"
          className={`profile-image ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
        <Link to="/" className="home-button" aria-label="Return to Home">
          ← Back to Home
        </Link>
      </div>

      <div className="vo-content">
        <h1 className="welcome-card-h1">Voice Acting Portfolio</h1>
        <div className="welcome-card vo-intro">
          <p className="welcome-text">
            The immersion a great voice actor is able to provide a project is my
            drive to perform.
          </p>
          <p className="welcome-text">
            I have always enjoyed great voice acting since I first booted up
            Starcraft in
            <br />
            1999 and listened to some of the most immersing voice acting I had
            experienced at the tenured age of 9. <br />
            <br />
            It has stuck with me through the years and inspired through this
            journey.
          </p>
          <p className="welcome-text">
            With a knack for story telling combined with my tech experience,{" "}
            <br />I can deliver high-quality recordings from my professional
            home studio.
          </p>
        </div>

        <h2 className="welcome-card-h2">Voice Demos</h2>
        <div className="demo-reel">
          <div className="voice-demos">
            <div className="demo-item">
              <h3>Character Demo Main</h3>
              <audio
                controls
                className="audio-player"
                preload="metadata"
                aria-label="Character Demo Main Audio"
              >
                <source src={characterDemo2020} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="demo-item">
              <h3>Character Demo</h3>
              <audio
                controls
                className="audio-player"
                preload="metadata"
                aria-label="Character Demo Audio"
              >
                <source src={characterDemo2019} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="demo-item">
              <h3>Commercial Demo</h3>
              <audio
                controls
                className="audio-player"
                preload="metadata"
                aria-label="Commercial Demo Audio"
              >
                <source src={commercialDemo2020} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
        <h2 className="welcome-card-h2">Featured Work</h2>
        <div className="video-samples">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Wgu0kXS3WT8"
              title="Window Man Voice Acting Sample"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              aria-label="Window Man Voice Acting Demo Video"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3TEX7Xptgxc"
              title="Boiling Steel Voice Acting Sample"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              aria-label="Boiling Steel Voice Acting Demo Video"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/alIgd3bvIQ4"
              title="The Last Epoch Voice Acting Sample"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              aria-label="The Last Epoch Voice Acting Demo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vo;
