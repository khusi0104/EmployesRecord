import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Editdetails from './Editdetails';

function Usercard({ user, darkMode }) {
  const { users, setUsers } = useContext(UserContext);
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== user.id));
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div
        className={`card border-0 shadow-sm rounded-4 mb-4 p-3 
        ${darkMode ? 'bg-dark text-light' : 'bg-light'} 
        card-hover`}
      >
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.username || user.name || 'default')}&mood=happy`}
          className="card-img-top rounded-4 mb-3"
          alt={`${user.name}'s avatar`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />

        <div className="card-body text-center">
          <h5 className="card-title mb-2 fw-semibold">{user.name}</h5>
          <p className={`small mb-3 ${darkMode ? 'text-light' : 'text-muted'}`}>
            📧 {user.email} <br />
            📞 {user.phone} <br />
            🏠 {user.address.street}, {user.address.city} <br />
            🌐 {user.website} <br />
            🏢 {user.company.name}
          </p>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <button
              className={`btn ${liked ? 'btn-success' : 'btn-outline-dark'} rounded-pill px-4`}
              onClick={handleLike}
            >
              {liked ? '❤️ Favorited' : '♡ Like'}
            </button>
            <button
              className="btn btn-outline-warning rounded-pill px-4"
              onClick={() => setShowModal(true)}
            >
              ✏️ Edit
            </button>
            <button
              className="btn btn-outline-danger rounded-pill px-4"
              onClick={handleDelete}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Editdetails
          user={user}
          closeModal={() => setShowModal(false)}
          darkMode={darkMode}
        />
      )}
    </>
  );
}

export default Usercard;


