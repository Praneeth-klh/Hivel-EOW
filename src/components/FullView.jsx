import React from 'react';
import "../css/Modal.css";  

const FullView = ({ selectedUser, setSelectedUser }) => {
  if (!selectedUser) return null; 

  const { firstName, lastName, email, phone, image, address,gender } = selectedUser;

  return (
    <div className="modal">
      <div className="modal-content" >
        <button className="close-btn" onClick={() => setSelectedUser(null)}>Close</button>
        <img src={image} alt={`${firstName} ${lastName}`} />
        <h2>{firstName} {lastName}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> { `${address.address}, ${address.city}` }</p>
        <p><strong>Gender:</strong> {gender}</p>
      </div>
    </div>
  );
};

export default FullView
