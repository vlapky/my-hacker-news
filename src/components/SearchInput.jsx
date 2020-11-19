import React from 'react';
import '../styles/SearchInput.css';

const SearchInput = ({ searchQuery , handleSearchChange, getSearch }) => {
    return(
        <div className='search' onKeyPress={getSearch}>
            <input 
            className='search_input'
            value={searchQuery} 
            onChange={handleSearchChange} 
            type="search"
            placeholder='Поиск...'/>
        </div>
    )
}

export default SearchInput;