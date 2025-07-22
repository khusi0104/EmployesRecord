import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header
      className={`sticky-top py-3 shadow-sm ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* You can replace the text below with an <img src="logo.png" alt="Logo" /> */}
        <h2 className="m-0 fw-bold">🚀 LogiNext</h2>

        <button
          className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
