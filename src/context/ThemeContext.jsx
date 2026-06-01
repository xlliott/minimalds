import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const [brand, setBrand] = useState('minimal');

  const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ mode, brand, setMode, setBrand, toggleMode }}>
      <div data-brand={brand} data-mode={mode}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
