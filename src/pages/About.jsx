import './About.css';

export default function About() {
  return (
    <div className="mds-page-about">
      <h1 className="mds-page-about__title">MinimalDS</h1>
      <p className="mds-page-about__subtitle">A simple multi-brand Design System.</p>
      <p className="mds-page-about__body">
        MinimalDS is a passion project created by Elliott Campbell, a Specialist Product Designer
        with a background in building and maintaining Design Systems for various notable companies.
      </p>
      <p className="mds-page-about__body">
        The aim of MinimalDS is to provide designers with a Design System which keeps maintenance
        to a minimum, while still providing usable, customisable, well structured assets.
      </p>

      <div className="mds-page-about__cards">
        <div className="mds-page-about__card">
          <h2 className="mds-page-about__card-title">Figma</h2>
          <p className="mds-page-about__card-body">
            Check out the MinimalDS design file on the Figma Community, and give it a like or
            save if you find it useful.
          </p>
          <a
            href="https://www.figma.com/community/file/1643197568772735915/minimal-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="mds-page-about__card-link"
          >
            View on Figma
          </a>
        </div>

        <div className="mds-page-about__card">
          <h2 className="mds-page-about__card-title">LinkedIn</h2>
          <p className="mds-page-about__card-body">
            Passionate about Design Systems? Interested in contributing to MinimalDS or working
            together? Just want to chat? Let's connect!
          </p>
          <a
            href="https://uk.linkedin.com/in/ellliottt"
            target="_blank"
            rel="noopener noreferrer"
            className="mds-page-about__card-link"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
