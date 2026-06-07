import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ReleaseNotes from './pages/ReleaseNotes';
import Colour from './pages/Colour';
import './theme/tokens.css';
import './App.css';

function Router() {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => setPath(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '#/about':         return <About />;
      case '#/release-notes': return <ReleaseNotes />;
      case '#/colour':        return <Colour />;
      default:                return <Home />;
    }
  };

  return (
    <Layout currentPath={path}>
      {renderPage()}
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
