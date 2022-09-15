import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-screen z-20 py-2 drop-shadow-xl text-center">
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
