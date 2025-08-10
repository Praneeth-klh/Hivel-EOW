import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import FullView from './components/FullView';
import USerLists from './components/UserList';

function App() {
  const [users, setUsers] = useState([]); 
  const [allUsers, setAllUsers] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(null);  
   useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setAllUsers(data.users);
        setUsers(data.users); 
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);
const searchUsers = (query) => {
    if (!query.trim()) {
      setUsers(allUsers); 
      return;
    }

    const qLower = query.toLowerCase();
    const filtered = allUsers.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const email = (user.email || '').toLowerCase();
      const phone = (user.phone || '').toLowerCase();

      return (
        fullName.includes(qLower) ||
        email.includes(qLower) ||
        phone.includes(qLower)
      );
    });

    setUsers(filtered);  // Update users state with filtered results
  };
  return (
    <div>
      <Search onChange={searchUsers} />
      <USerLists users={users} setSelectedUser={setSelectedUser} />
      <FullView selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default App;
