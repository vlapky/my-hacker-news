import React from 'react';

const Select = ({ HITS_SELECT, hitsPerPage, handleHitsSelectChange }) => {
    return(
        <select onChange={handleHitsSelectChange}>
           { HITS_SELECT.map(({ label, value }) => 
           <option key={`${label}-${value}`} value={value}> {label} </option>)}
        </select>
    )
}

export default Select;