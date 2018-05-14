import React from 'react';
import './Button.css';

const Button = (props) => (
  <a className="button is-primary button-elevated">{props.children}</a>
);

export default Button;