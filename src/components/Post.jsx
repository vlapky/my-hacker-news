import React from 'react';
import '../styles/Post.css';

const Post = ({ objectID, author, title, created_at, points, num_comments, url }) => {

    const created_time = created_at.slice(0, 10).replace(/-/g, " ");

    return (
        <li className='post' key={objectID}>
            <article>
                <h3 className='title'>{title === null ? 'Нет названия' : title}</h3>
                <span className='post_info'>{`${author} | ${created_time} | ${num_comments} комментариев | ${points} очков `}</span>
                <a className='read_link' href={url} rel="noreferrer" target='_blank'>{url === null ? 'Пусто' : 'Читать'}</a>
                <hr />
            </article>
        </li>
    );
}

export default Post;