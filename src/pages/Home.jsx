import './Home.css';
import Button from '../components/Button/Button';

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
          role="secondary"
          size="default"
          onClick={() => window.open('https://www.figma.com/community/file/1643197568772735915/minimal-design-system', '_blank')}
        >
          View on Figma
        </Button>
      </div>

      <div className="mds-page-home__cards">
        <div className="mds-page-home__card">
          <div className="mds-page-home__card-text">
            <h2 className="mds-page-home__card-title">Foundations</h2>
            <p className="mds-page-home__card-body">
              The core principles that define the overall look and feel of the product.
            </p>
          </div>
          <Button
            role="secondary"
            size="default"
            onClick={() => window.location.hash = '#/foundations'}
          >
            View Foundations
          </Button>
        </div>

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
