import React from 'react';
import '../css/userstyle.css';

const Card = (props) => {
  return (
    <div className="user-card">
      <img src={props.image} alt={`${props.firstname}'s avatar`} />
      <h1>{props.firstname} {props.lastName}</h1>
      <p>{props.gender}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
