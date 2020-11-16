import React from 'react';

const Post = ({ objectID, author, title, created_at, points, num_comments, url }) => {

    const created_time = created_at.slice(0,10).replace( /-/g, " " );

    return (
        <li key={objectID}>
            <p>{title}</p>
            <span>{author}|</span>
            <span>{ created_time }|</span>
            <span>{num_comments} комментариев|</span>
            <span>{points} очков|</span>
            <a href={url}>Ссылка на источник</a>
        </li>
    );
}

export default Post;