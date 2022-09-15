import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function AppBrand() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <Link to="/" className="flex justify-start">
      <img className="flex-none w-12 h-12 rounded-lg animate-scale" src="/images/logo.png" alt="NoteApp Logo" />
      <h1 className="hidden md:block flex-initial px-3 text-4xl hover:drop-shadow-2xl">
        {locale === 'en' ? 'NotesApp' : 'Aplikasi Catatan'}
      </h1>
    </Link>
  );
}

export default AppBrand;
