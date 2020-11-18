import React from 'react';

const SearchInput = ({ searchQuery , handleSearchChange, getSearch }) => {
    return(
        <div onKeyPress={getSearch}>
            <input 
            value={searchQuery} 
            onChange={handleSearchChange} 
            type="search"
            placeholder='Поиск...'/>
        </div>
    )
}

export default SearchInput;