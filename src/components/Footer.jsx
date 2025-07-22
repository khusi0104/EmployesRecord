import React from 'react';

function Footer({ darkMode }) {
  return (
    <footer
      className={`text-center py-3 mt-auto ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <p className="mb-0 small">
        © {new Date().getFullYear()} LogiNext | Built by Khusi Yadav
      </p>
    </footer>
  );
}

export default Footer;

