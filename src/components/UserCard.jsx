import React from 'react';
import '../css/userstyle.css';

const Card = ({ firstname, lastName, email, phone, image, onClick }) => {
  return (
    <div className="user-card" onClick={onClick} role="button" tabIndex={0}>
      <img src={image} alt={`${firstname} ${lastName}`} />
      <h3>{firstname} {lastName}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default Card;
