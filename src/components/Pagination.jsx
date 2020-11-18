import React from 'react';

const Pagination = ({ onClick, page, lastPage }) => {

    return (
        <div>
            <button disabled={page === 0} onClick={onClick} data-name='prev'>{'<<'}</button>
            <button disabled={page === lastPage-1} onClick={onClick} data-name='next'>{'>>'}</button>
        </div>
    )
}

export default Pagination;