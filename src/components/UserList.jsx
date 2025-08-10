import React from 'react';
import Card from './UserCard';
import '../css/userstyle.css';


const USerLists = ({users}) => {
   if (!users || users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div className="card-container">
      {users.map((u) => (
        <Card
          key={u.id}
          firstname={u.firstName}
          lastName={u.lastName} // ✅ matches Card.jsx
          gender={u.gender}
          image={u.image}       // ✅ matches Card.jsx
          email={u.email}       // ✅ so email works
        />
      ))}
    </div>
  );
}

export default USerLists;
