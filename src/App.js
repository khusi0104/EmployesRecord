import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './context/UserContext';
import Usercard from './components/Usercard';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await response.json();
        setUserList(jsonData);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Sync dark mode class on body element
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  return (
    <UserContext.Provider value={{ users: userList, setUsers: setUserList }}>
      <div className={`app d-flex flex-column min-vh-100 ${isDarkTheme ? 'dark-mode' : ''}`}>
        <Header darkMode={isDarkTheme} toggleDarkMode={toggleTheme} />

        <main className="container mt-4 flex-grow-1">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="row">
              {userList.map(person => (
                <div key={person.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <Usercard user={person} darkMode={isDarkTheme} />
                </div>
              ))}
            </div>
          )}
        </main>

        <Footer darkMode={isDarkTheme} />

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </div>
    </UserContext.Provider>
  );
}

export default App;
