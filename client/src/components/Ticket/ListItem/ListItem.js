import React from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import './ListItem.css';

import TicketBasicInfo from './TicketBasicInfo';
import TicketStatus from './TicketStatus';
import TicketProject from './TicketProject';
import Avatar from '../../UI/User/Avatar';

const propTypes = {
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

const userNames = ['John', 'Dave', 'Frank', 'Edgar'];
const projectNames = ['Sigma', 'Zeta', 'Epsilon'];
const status = ['New', 'Open', 'Pending', 'On-hold', 'Solved', 'Closed'];

const ListItem = (props) => (
  <Link to={`/tickets/${props._id}`}> 
    <li>
      <div className={'card ' + (props.priority)}>
        <div className="card-content">
          <Avatar name={userNames[Math.floor(Math.random() * userNames.length)]}/>
          <TicketBasicInfo subject={props.subject}
            description={props.description}
            timestap={props.timestamp} />
          <TicketStatus status={status[Math.floor(Math.random() * status.length)]}/>
          <TicketProject name={projectNames[Math.floor(Math.random() * projectNames.length)]}/>
        </div>
      </div>
    </li>
  </Link>
);

ListItem.propTypes = propTypes;

export default ListItem;

