export default function Vo() {
  return (
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
  );
}
