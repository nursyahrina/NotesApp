import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function ToggleLocale() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  return (
    <button type="button" onClick={toggleLocale} className="toggle-icon w-8 p-[0.2rem] rounded-md animate-scale drop-shadow-sm">
      <p>{locale === 'en' ? 'id' : 'en'}</p>
    </button>
  );
}

export default ToggleLocale;
