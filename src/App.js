/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  RiArchiveFill, RiLogoutBoxRFill, RiMoonFill, RiSunFill,
} from 'react-icons/ri';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';

function NoteApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [locale, setLocale] = React.useState('en');
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setLoading(false);
    });
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
    });
  }

  const logout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'id' : 'en'));
    document.title = locale === 'en' ? 'Rubie | NotesApp' : 'Rubie | Aplikasi Catatan';
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const localeContextValue = React.useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  const themeContextValue = React.useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const pathHome = '/';
  const pathAuth = '/*';
  const pathRegister = '/register';
  const pathArchive = '/archives';
  const pathAddNew = '/notes/new';
  const pathDetail = '/notes/:id';
  const path404 = '*';

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <div className="note-app">
            <header className="flex flex-wrap gap-4 justify-between px-5 py-5">
              <Link to="/" className="flex justify-start">
                <img className="flex-none w-12 h-12 rounded-lg animate-scale" src="/images/logo.png" alt="NoteApp Logo" />
                <h1 className="hidden md:block flex-initial px-3 text-4xl text text-sky-100 hover:drop-shadow-2xl">
                  {locale === 'en' ? 'NotesApp' : 'Aplikasi Catatan'}
                </h1>
              </Link>
              <div className="flex items-center text-white ml-4 pb-2 gap-x-4 gap-y-2">
                <button type="button" onClick={toggleLocale} className="w-8 p-[0.2rem] rounded-md animate-scale drop-shadow-sm text-indigo-900 bg-white hover:bg-slate-200">
                  <p>{locale === 'en' ? 'id' : 'en'}</p>
                </button>
                <button type="button" onClick={toggleTheme} className="animate-scale">
                  {theme === 'dark' && <RiSunFill size={36} className="drop-shadow-sm hover:text-slate-200" />}
                  {theme === 'light' && <RiMoonFill size={36} className="drop-shadow-sm hover:text-slate-200" />}
                </button>
              </div>
            </header>
            <main>
              <Routes>
                <Route path={pathAuth} element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path={pathRegister} element={<RegisterPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>

    );
  }
  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className="note-app">
          <header className="flex flex-wrap gap-4 justify-between items-center m-3 px-5 py-5">
            <Link to="/" className="flex justify-start">
              <img className="flex-none w-12 h-12 rounded-lg animate-scale" src="/images/logo.png" alt="NoteApp Logo" />
              <h1 className="hidden md:block flex-initial px-3 text-4xl text text-sky-100 hover:drop-shadow-2xl">
                {locale === 'en' ? 'NotesApp' : 'Aplikasi Catatan'}
              </h1>
            </Link>
            <div className="flex items-center text-white ml-4 pb-2 gap-x-4 gap-y-2">
              <Link to="/archives" className="animate-scale drop-shadow-sm">
                <RiArchiveFill size={36} className="hover:text-slate-200" />
              </Link>
              <button type="button" onClick={toggleLocale} className="w-8 p-[0.2rem] rounded-md animate-scale drop-shadow-sm text-indigo-900 bg-white hover:bg-slate-200">
                <p>{locale === 'en' ? 'id' : 'en'}</p>
              </button>
              <button type="button" onClick={toggleTheme} className="animate-scale">
                {theme === 'dark' && <RiSunFill size={36} className="drop-shadow-sm hover:text-slate-200" />}
                {theme === 'light' && <RiMoonFill size={36} className="drop-shadow-sm hover:text-slate-200" />}
              </button>
              <button type="button" onClick={logout} className="animate-scale">
                <RiLogoutBoxRFill size={36} className="drop-shadow-sm hover:text-slate-200" />
              </button>
              <p className="hidden md:block">{authedUser.name}</p>
            </div>
          </header>

          <main>
            <Routes>
              <Route
                path={pathHome}
                element={<HomePage />}
              />
              <Route
                path={pathArchive}
                element={<ArchivePage />}
              />
              <Route path={pathAddNew} element={<AddPage />} />
              <Route path={pathDetail} element={<DetailPage />} />
              <Route path={path404} element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>

  );
}

export default NoteApp;
