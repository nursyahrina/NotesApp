import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import ThemeContext from '../contexts/ThemeContext';

function ToggleTheme() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button type="button" onClick={toggleTheme} className="animate-scale">
      {theme === 'dark' && <RiSunFill size={36} className="drop-shadow-sm" />}
      {theme === 'light' && <RiMoonFill size={36} className="drop-shadow-sm" />}
    </button>
  );
}

export default ToggleTheme;
