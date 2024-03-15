import React from 'react';


const SearchCartIcons = ({ isVisible }) => {
   
  return (
    <div className="ms-auto search-cart">
      <img src={searchicon} alt="Search" width="24px" height="24px" className="me-3" />
      <img src={carticon} alt="Cart" width="24px" height="24px" />
    </div>
  );
};

export default SearchCartIcons;
