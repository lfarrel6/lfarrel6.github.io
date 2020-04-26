import { useState, useEffect } from 'react';
const THEME_KEY = 'theme';
const THEME_ENUM = Object.freeze({ DARK: 'dark', LIGHT: 'light' });

const useDarkMode = (): [string, () => void] => {
  const [mode, setMode] = useState(THEME_ENUM.DARK);

  const updateMode = (newMode: string): void => {
    window.localStorage.setItem(THEME_KEY, newMode);
    setMode(newMode);
  }

  const toggleTheme = (): void => updateMode(mode === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT);

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_KEY);
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme;
    isDark ? updateMode(THEME_ENUM.DARK) : localTheme ? setMode(localTheme) : updateMode(THEME_ENUM.LIGHT);
  }, []);

  return [mode, toggleTheme];
}

export default useDarkMode;