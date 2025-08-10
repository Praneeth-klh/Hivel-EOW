import React from 'react';
import Card from './components/UserCard';

const USerLists = (props) => {
  return (
    <div>
      {props.map((u) => (
        <Card 
          key={u.id}  
          firstname={u.firstName} 
          lastname={u.lastName}
          gender={u.gender}
          img={u.img} 
        />
      ))}
    </div>
  );
}

export default USerLists;
