import './App.css';
import Search from './components/Search';
import FullView from './components/FullView';
import USerLists from './components/UserList';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Search />
      {/* FIX: changed `user` to `users` */}
      <USerLists users={users} />  
      <FullView />
    </div>
  );
}

export default App;
