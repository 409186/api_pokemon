import React from 'react';
import "./Searching.css";

const Searching = ({ handleSearch }) => {
  return (
        <input 
            type="text"
            placeholder="Search"
            onChange={handleSearch}
        />
  );
};

export default Searching;