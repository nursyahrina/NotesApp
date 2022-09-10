import React from 'react';
import { FaSadTear } from 'react-icons/fa';

function NotFoundPage() {
  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">Page Not Found</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-center">
          <h3 className="p-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="leading-relaxed">
              Sorry! The page you&apos;re looking for doesn&apos;t exist
              {' '}
            </span>

            <FaSadTear className="inline text-amber-300" />
          </h3>
          <img className="p-3 pb-12 min-w-[2/3] align-center rounded-lg" src="/images/404.png" alt="404" />
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
