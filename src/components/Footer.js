import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-screen z-20 py-2 bg-gradient-to-b from-slate-700 to-slate-900 text-indigo-200 drop-shadow-xl text-center">
      <p className="text-lg">
        &copy; 2022
        {' '}
        <strong>Rubie&apos;s Studio</strong>
        {' '}
        by Nursyahrina &hearts;
        {' '}
        -
        {' '}
        <a href="https://storyset.com/online" className="text-sm">Online illustrations by Storyset</a>
      </p>
    </footer>
  );
}

export default Footer;
