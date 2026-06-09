import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ReleaseNotes from './pages/ReleaseNotes';
import Colour from './pages/Colour';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Spacing from './pages/Spacing';
import Radius from './pages/Radius';
import DesignTokens from './pages/DesignTokens';
import AccordionPage from './pages/AccordionPage';
import AlertPage from './pages/AlertPage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import CheckboxPage from './pages/CheckboxPage';
import DialogPage from './pages/DialogPage';
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
      case '#/typography':    return <Typography />;
      case '#/icons':         return <Icons />;
      case '#/spacing':       return <Spacing />;
      case '#/radius':        return <Radius />;
      case '#/tokens':        return <DesignTokens />;
      case '#/accordion':     return <AccordionPage />;
      case '#/alert':         return <AlertPage />;
      case '#/button':        return <ButtonPage />;
      case '#/card':          return <CardPage />;
      case '#/checkbox':      return <CheckboxPage />;
      case '#/dialog':        return <DialogPage />;
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
