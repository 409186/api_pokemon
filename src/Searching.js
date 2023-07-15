import React from 'react';
import "./Searching.css";

const Searching = ({ handleSearch }) => {
  return (
    <div>
        <input 
            type="text"
            placeholder="Search"
            onChange={handleSearch}
        />
    </div>
  );
};

export default Searching;