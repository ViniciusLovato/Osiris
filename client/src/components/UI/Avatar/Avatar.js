import React from 'react';
import './Avatar.css';

const Avatar = ({name, pic}) => (
    <div className="user-avatar">
      <div className="pic"></div>
      <span className="name">{name}</span>
    </div>
);

export default Avatar;