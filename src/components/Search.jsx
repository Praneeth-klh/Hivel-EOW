import React from 'react';
import '../css/search.css';

const Search = ({ onChange }) => {
  return (
    <header>
      <form id="searchForm" onSubmit={(e) => e.preventDefault()}> 
        <input
          type="text"
          id="searchInput"
          placeholder="Search by name, email, or phone..."
          onChange={(e) => onChange(e.target.value)}  
        />
      </form>
    </header>
  );
};

export default Search;