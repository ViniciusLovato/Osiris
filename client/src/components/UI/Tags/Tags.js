import React from 'react';
import './Tags.css';

const Tags = ({name}) => {
  return(
    <div className="tag-info">
      <span className="tag is-danger">Bug</span>
      <span className="tag is-info">Feature</span>
    </div>
  );
};

export default Tags;
