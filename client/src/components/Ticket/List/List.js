import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired
  })).isRequired
}

const List = (props) => (
      <div className="list">
        <FlipMove staggerDurationBy="30" duration={500} typeName="ul">
          {/* Flip move does not support SFC. We have to wrap the elements in a div or a non-functional component */}
          <div>
            { props.items.map ( (item, index) => (
              <ListItem key={item._id} {...item}/>
            )) }
          </div>
        </FlipMove>
      </div>  
);

List.propTypes = propTypes;

export default List;

