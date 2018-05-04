import React from 'react';
import './FlexContainer.css';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.any
}

const FlexContainer = (props) => (
  <div className="flex-container">
    { props.children }
  </div>
);

FlexContainer.propTypes = propTypes;

export default FlexContainer;