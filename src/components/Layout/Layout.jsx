import { useEffect, useRef } from 'react';
import './Layout.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children, currentPath, sidebarOpen, onSidebarOpen, onSidebarClose }) {
  const contentRef = useRef(null);

  // Scroll content to top on every page change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  return (
    <div className="mds-layout">
      <NavBar onMenuClick={onSidebarOpen} />
      <div className="mds-layout__body">
        {sidebarOpen && (
          <div
            className="mds-layout__backdrop"
            onClick={onSidebarClose}
            aria-hidden="true"
          />
        )}
        <Sidebar
          currentPath={currentPath}
          isOpen={sidebarOpen}
          onClose={onSidebarClose}
        />
        <main className="mds-layout__content" ref={contentRef}>
          {children}
        </main>
      </div>
    </div>
  );
}
