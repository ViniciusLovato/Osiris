import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

class ListItem extends Component {
  render() {
    return (
      <li>
        <div class="card">

          <div class="card-content">
            <div class="media">
              {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src={this.props.avatar} alt="Placeholder"/>
                </figure>
              </div> */}
              <div class="media-content">
                <p class="title is-4">{this.props.subject}</p>
                <p class="subtitle is-6">{this.props.priority}</p>
              </div>
            </div>

            <div class="content">
              {this.props.description ||  `no description `}
              <br/>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

ListItem.propTypes = propTypes;

export default ListItem;

