import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const propTypes = {
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

const Avatar = ({name, pic}) => {
  return(
    <div class="user-avatar">
      <div class="pic"></div>
      <span class="name">{name}</span>
    </div>
  );
};

const TicketBasicInfo = ({subject, description}) => {
  return(
    <div class="ticket-info">
      <div class="header">
        <span class="subject">{subject}</span><span class="timestamp">Wednesday, May 28 at 2 p.m.</span>
      </div>
      <div>
        <span class="description">{description || `no description `}</span>
      </div>
    </div>
  );
};

const TicketStatus = ({status}) => {
  return(
    <div class="ticket-status">
      <div class="status"></div>
      <span class="description">{status}</span>
    </div>
  );
};

const TicketProject = ({name, tags}) => {
  return(
    <div class="project-info">
      <header class="project">{name}</header>
      <Tags />
    </div>
  );
};

const Tags = ({name}) => {
  return(
    <div class="tag-info">
      <span class="tag is-danger">Bug</span>
      <span class="tag is-info">Feature</span>
    </div>
  );
};

class ListItem extends Component {
  render() {
    const userNames = ['John', 'Dave', 'Frank', 'Edgar'];
    const projectNames = ['Sigma', 'Zeta', 'Epsilon'];
    const status = ['New', 'Open', 'Pending', 'On-hold', 'Solved', 'Closed'];
    
    return (
      <li>
        <div className={'card ' + (this.props.priority)}>
          <div class="card-content">
            <Avatar name={userNames[Math.floor(Math.random() * userNames.length)]}/>
            <TicketBasicInfo subject={this.props.subject}
              description={this.props.description}
              timestap={this.props.timestamp} />
            <TicketStatus status={status[Math.floor(Math.random() * status.length)]}/>
            <TicketProject name={projectNames[Math.floor(Math.random() * projectNames.length)]}/>
          </div>
        </div>
      </li>
    );
  }
};

ListItem.propTypes = propTypes;

export default ListItem;

