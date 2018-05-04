import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import './List.css';
import ListItem from '../listItem/ListItem';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired
  })).isRequired
}

class List extends Component {

  renderListItems() {
    return this.props.items.map( (item, index) => {
      return (
        <ListItem key={item.id} {...item}/>
      )
    })
  }

  render() {
    return (   
      <div className="list">
        {/* <button className="button is-primary is-outlined"onClick={this.shuffleItems}>
          Shuffle!
        </button> */}
        <FlipMove
            staggerDurationBy="30"
            duration={500}
            typeName="ul"
          >
          { this.renderListItems() }
        </FlipMove>
      </div>  
    );
  }
}

List.propTypes = propTypes;

export default List;

