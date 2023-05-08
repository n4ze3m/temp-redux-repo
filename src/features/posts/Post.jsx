import React from 'react';

const Post = ({ id, title, body, onEditClick, onCommentClick }) => {
  const truncatedBody = body.split(' ').slice(0, 50).join(' ');

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{truncatedBody}...</p>
      <button onClick={() => onEditClick(id)}>Edit</button>
      <button onClick={() => onCommentClick(id)}>Comment</button>
    </div>
  );
};

export default Post;
