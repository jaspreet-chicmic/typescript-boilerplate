import { SearchIcon } from 'Assets';
import React from 'react';

function SearchInput({
  type = 'text',
  ...otherProps
}) {
  return (
    <div className="position-relative searchbar">
      <em>
        <img src={SearchIcon} alt="Search" width="20" height="" />
      </em>
      <input
        id="search"
        name="search"
        type={type}
        placeholder="Search"
        className="form-control rounded-50"
        {...otherProps}
      />
    </div>
  );
}

export default SearchInput;
