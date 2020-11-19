import React from 'react';
import '../styles/Select.css';

const Select = ({ HITS_SELECT, hitsPerPage, handleHitsSelectChange }) => {
    return(
        <select className='select' onChange={handleHitsSelectChange}>
           { HITS_SELECT.map(({ label, value }) => 
           <option className='select_option' key={`${label}-${value}`} value={value}> {label} </option>)}
        </select>
    )
}

export default Select;