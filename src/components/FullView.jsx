import React from 'react';
import "../css/Modal.css";  // Assuming this handles modal and content styles

const FullView = ({ user, closeModal }) => {
  if (!user) {
    return null;  // If no user, don't render the modal
  }

  const { firstName, lastName, email, phone, address } = user;

  return (
    <div className="modal" onClick={closeModal}>  {/* Close modal on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>  {/* Prevent modal from closing when clicking inside */}
        <span
          className="close-btn"
          onClick={closeModal}  // Close modal on close button click
          tabIndex={0}  // Make the close button focusable
          onKeyDown={(e) => e.key === 'Enter' && closeModal()}  // Allow closing with Enter key
        >
          &times;
        </span>
        <h1>{firstName} {lastName}</h1>
        <p><strong>Email:</strong> {email || 'Not available'}</p>
        <p><strong>Phone:</strong> {phone || 'Not available'}</p>
        <p><strong>Address:</strong> {address ? `${address.street}, ${address.city}` : 'Not available'}</p>
      </div>
    </div>
  );
};

export default FullView
