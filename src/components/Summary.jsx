import React from 'react';
import '../styles/Summary.css';

const Summary = ({ hitsPerPage, page, lastPage }) => {
    return (
        <p className='summary'>
            {`Страница ${page} из ${lastPage} | Статей ${hitsPerPage}`}
        </p>
    )
}

export default Summary;