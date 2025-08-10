import React from 'react';
import Card from './UserCard';
import '../css/userstyle.css';


const USerLists = ({ users, setSelectedUser }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;  // If no users match the search
  }

  return (
    <div className="card-container">
      {users.map(user => (
        <Card
          key={user.id}
          firstname={user.firstName}
          lastName={user.lastName}
          email={user.email}
          phone={user.phone}
          image={user.image}
          onClick={() => setSelectedUser(user)}  
        />
      ))}
    </div>
  );
};
export default USerLists;
