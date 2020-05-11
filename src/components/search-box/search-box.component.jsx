import React from 'react';
import './search-box.styles.css';

//Here we are destructuring the props object for dynamic purposes
export const SearchBox = ({placeholder, handleChange}) => (
  <input type="search" 
    className = "search"
    placeholder={placeholder} 
    onChange={handleChange}
  />
)