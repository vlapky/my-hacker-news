import React from 'react';

const Pagination = ({ onClick, page, lastPage }) => {

    return (
        <div>
            { page !== 0 && <button onClick={onClick} data-name='prev'>{'<<'}</button>}
            { page !== lastPage - 1 && <button onClick={onClick} data-name='next'>{'>>'}</button>}
        </div>
    )
}

export default Pagination;