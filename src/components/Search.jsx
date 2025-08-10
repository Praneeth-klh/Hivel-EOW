import React from 'react';
import '../css/search.css';
const Search = () => {
  const submitSearch = (event) => {
    event.preventDefault(); 
    const searchQuery = document.getElementById('searchInput').value;
    console.log('Search query:', searchQuery); 
  };

  return (
    <header>
      <form id="searchForm" onSubmit={submitSearch}>
        <input 
          type="text" 
          id="searchInput" 
          placeholder="Search..." 
        />
        <button 
          type="submit" 
          id="searchBtn" 
          style={{ display: 'none' }}
        >
          Search
        </button>
        <img 
          src="https://tse2.mm.bing.net/th/id/OIP.ZV3RxF-kSSlLvaYbk1TqhAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="search icon" 
          style={{ cursor: 'pointer' }} 
          onClick={submitSearch} 
          id="search"
        />
      </form>
    </header>
  );
};

export default Search;
