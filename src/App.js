/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { RiArchiveFill, RiLogoutBoxRFill } from 'react-icons/ri';
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
import ToggleLocale from './components/ToggleLocale';
import ToggleTheme from './components/ToggleTheme';
import AppBrand from './components/AppBrand';

function NoteApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [locale, setLocale] = React.useState(() => localStorage.getItem('locale') || 'en');
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem('locale', locale);
    document.title = locale === 'en' ? 'Rubie | NotesApp' : 'Rubie | Aplikasi Catatan';
  }, [locale]);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

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
              <AppBrand />
              <div className="flex items-center ml-4 pb-2 gap-x-4 gap-y-2">
                <ToggleLocale />
                <ToggleTheme />
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
            <AppBrand />
            <div className="flex items-center ml-4 pb-2 gap-x-4 gap-y-2">
              <Link to="/archives" className="animate-scale drop-shadow-sm">
                <RiArchiveFill size={36} />
              </Link>
              <ToggleLocale />
              <ToggleTheme />
              <button type="button" onClick={logout} className="animate-scale">
                <RiLogoutBoxRFill size={36} className="drop-shadow-sm" />
              </button>
              <p className="px-4 hidden md:block border-l-4 border-double border-slate-800 dark:border-slate-100">{authedUser.name}</p>
            </div>
          </header>

          <main>
            <Routes>
              <Route path={pathHome} element={<HomePage />} />
              <Route path={pathArchive} element={<ArchivePage />} />
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
