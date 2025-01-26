export default function SocialLinks() {
  return (
    <>
      <div className="socials-links-grid">
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
    </>
  );
}
