import React from 'react'
import "../css/Modal.css";
const FullView = ({user ,closeModal}) => {
  if (!user) {
    return null; // or <p>Loading...</p>
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address?.street}, {user.address?.city}</p>
      </div>
    </div>
  );
}

export default FullView