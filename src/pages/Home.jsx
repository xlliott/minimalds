import './Home.css';
import Button from '../components/Button/Button';

const figmaIcon = (
  <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="currentColor"/>
    <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="currentColor"/>
    <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="currentColor"/>
    <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="currentColor"/>
    <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="currentColor"/>
  </svg>
);

export default function Home() {
  return (
    <div className="mds-page-home">
      <div className="mds-page-home__hero">
        <h1 className="mds-page-home__title">MinimalDS</h1>
        <p className="mds-page-home__subtitle">A simple multi-brand Design System.</p>
        <p className="mds-page-home__body">
          MinimalDS was built to provide Designers with a starting point to help get a project off the ground.
          It's not intended to be flashy or complex. Check out the design file on the Figma Community, and give
          it a like or save if you find it useful.
        </p>
        <Button
          role="primary"
          size="default"
          leadingIcon={figmaIcon}
          onClick={() => window.open('https://www.figma.com/community/file/1643197568772735915/minimal-design-system', '_blank')}
        >
          View on Figma
        </Button>
      </div>

      <div className="mds-page-home__divider" />

      <div className="mds-page-home__cards">
        <div className="mds-page-home__card">
          <div className="mds-page-home__card-text">
            <h2 className="mds-page-home__card-title">Design Tokens</h2>
            <p className="mds-page-home__card-body">
              Named, reusable values that ensure consistency across design and code.
            </p>
          </div>
          <Button
            role="secondary"
            size="default"
            onClick={() => window.location.hash = '#/tokens'}
          >
            View Design Tokens
          </Button>
        </div>

        <div className="mds-page-home__card">
          <div className="mds-page-home__card-text">
            <h2 className="mds-page-home__card-title">Components</h2>
            <p className="mds-page-home__card-body">
              Reusable UI building blocks used to construct user interfaces.
            </p>
          </div>
          <Button
            role="secondary"
            size="default"
            onClick={() => window.location.hash = '#/accordion'}
          >
            View Components
          </Button>
        </div>
      </div>
    </div>
  );
}
