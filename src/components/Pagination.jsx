import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ onClick, page, lastPage }) => {

    return (
        <div className='buttons'>
            <button className='prev_button' disabled={page === 0} onClick={onClick} data-name='prev'>{'<<'}</button>
            <button className='next_button' disabled={page === lastPage-1} onClick={onClick} data-name='next'>{'>>'}</button>
        </div>
    )
}

export default Pagination;