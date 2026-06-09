import { useState } from 'react';
import './Layout.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children, currentPath }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="mds-layout">
      <NavBar onMenuClick={() => setSidebarOpen(true)} />
      <div className="mds-layout__body">
        {/* Backdrop — mobile only */}
        {sidebarOpen && (
          <div
            className="mds-layout__backdrop"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        <Sidebar
          currentPath={currentPath}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="mds-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
}
