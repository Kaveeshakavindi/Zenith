import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  midnight: {
    name: 'midnight',
    '--bg-color': 'rgba(15, 23, 42, 0.8)',
    '--text-color': '#f1f5f9',
    '--icon-color': '#94a3b8',
    '--focus-progress-color': '#3b82f6',
    '--focus-progress-trail-color': 'rgba(59, 130, 246, 0.2)',
    '--break-progress-color': '#10b981',
    '--break-progress-trail-color': 'rgba(16, 185, 129, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  sunset: {
    name: 'sunset',
    '--bg-color': 'rgba(239, 68, 68, 0.8)',
    '--text-color': '#fef2f2',
    '--icon-color': '#fca5a5',
    '--focus-progress-color': '#f59e0b',
    '--focus-progress-trail-color': 'rgba(245, 158, 11, 0.2)',
    '--break-progress-color': '#ef4444',
    '--break-progress-trail-color': 'rgba(239, 68, 68, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
  },
  ocean: {
    name: 'ocean',
    '--bg-color': 'rgba(14, 116, 144, 0.8)',
    '--text-color': '#f0fdfa',
    '--icon-color': '#5eead4',
    '--focus-progress-color': '#06b6d4',
    '--focus-progress-trail-color': 'rgba(6, 182, 212, 0.2)',
    '--break-progress-color': '#0ea5e9',
    '--break-progress-trail-color': 'rgba(14, 165, 233, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #0891b2 0%, #0284c7 100%)',
  },
  forest: {
    name: 'forest',
    '--bg-color': 'rgba(21, 128, 61, 0.8)',
    '--text-color': '#f0fdf4',
    '--icon-color': '#86efac',
    '--focus-progress-color': '#22c55e',
    '--focus-progress-trail-color': 'rgba(34, 197, 94, 0.2)',
    '--break-progress-color': '#16a34a',
    '--break-progress-trail-color': 'rgba(22, 163, 74, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
  },
  lavender: {
    name: 'lavender',
    '--bg-color': 'rgba(139, 92, 246, 0.8)',
    '--text-color': '#faf5ff',
    '--icon-color': '#c4b5fd',
    '--focus-progress-color': '#8b5cf6',
    '--focus-progress-trail-color': 'rgba(139, 92, 246, 0.2)',
    '--break-progress-color': '#a855f7',
    '--break-progress-trail-color': 'rgba(168, 85, 247, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
  },
  rose: {
    name: 'rose',
    '--bg-color': 'rgba(236, 72, 153, 0.8)',
    '--text-color': '#fdf2f8',
    '--icon-color': '#f9a8d4',
    '--focus-progress-color': '#ec4899',
    '--focus-progress-trail-color': 'rgba(236, 72, 153, 0.2)',
    '--break-progress-color': '#f43f5e',
    '--break-progress-trail-color': 'rgba(244, 63, 94, 0.2)',
    '--homepage-bg': 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
  },
};


export const CustomThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('midnight');

  const setThemeVariables = (themeObj) => {
    Object.entries(themeObj).forEach(([key, value]) => {
      if (key.startsWith('--')) {
        document.documentElement.style.setProperty(key, value);
      }
    });
  };

  useEffect(() => {
    setThemeVariables(themes[themeName]);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, availableThemes: Object.keys(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
};
