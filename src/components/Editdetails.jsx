import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Editdetails({ user, closeModal, darkMode }) {
  const { users, setUsers } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u));
    setUsers(updatedUsers);
    closeModal();
  };

  return (
    <div className="modal show d-block bg-dark bg-opacity-75">
      <div className="modal-dialog fade-in-modal">
        <div className={`modal-content rounded-4 shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
          <div className="modal-header border-0">
            <h5 className="modal-title fw-semibold">✏️ Edit User</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body">
            {['name', 'email', 'phone', 'website'].map((field) => (
              <div className="form-floating mb-3" key={field}>
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'bg-dark text-light border-secondary' : ''
                  }`}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field}
                />
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
          </div>

          <div className="modal-footer border-0">
            <button className="btn btn-outline-secondary rounded-pill px-4" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary rounded-pill px-4" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editdetails;
