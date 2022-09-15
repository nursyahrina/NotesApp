import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';

function NotFoundPage() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">Page Not Found</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-center">
          <h3 className="p-8 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="leading-relaxed">
              {locale === 'en' ? "Sorry! The page you're looking for doesn't exist." : 'Maaf, Halaman yang anda tuju tidak tersedia.'}
              {' '}
            </span>

            <FaSadTear className="inline" />
          </h3>
          <img className="p-3 pb-12 min-w-[2/3] align-center rounded-lg" src="/images/404.png" alt="404" />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
