import { useState } from "react";
import { Link } from 'react-router-dom';
import characterDemo2020 from '../assets/audio/DavidGuffre_CharacterDemo2020.mp3';
import characterDemo2019 from '../assets/audio/DavidGuffre_2019CharDemos_v2_o.mp3';
import commercialDemo2020 from '../assets/audio/DavidGuffre_CommercialDemo2020.mp3';

const Vo = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="vo-section" className="section-container" aria-label="Voice Acting Portfolio">
      <div className="profile-image-container" role="img" aria-label="Profile Image">
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
            I'm a versatile voice actor with a passion for bringing characters to life. With experience in commercial, character, and narrative work, I specialize in creating distinct and memorable voices that resonate with audiences.
          </p>
          <p className="welcome-text">
            My background in performance and storytelling, combined with my technical expertise, allows me to deliver high-quality recordings from my professional home studio.
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
