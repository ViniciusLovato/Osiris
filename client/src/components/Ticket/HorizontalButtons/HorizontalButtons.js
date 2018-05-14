import React from 'react';

import './HorizontalButtons.css';

// TODO fix this
// Crate smaller functional components for this 
const HorizontalButtons = () => (
  <div className="horizontal-buttons-container">
    <div className="control">
      <div className="select">
        <select>
          <option>Order by</option>
          <option>Assignee</option>
          <option>Date</option>
          <option>Last Update</option>
        </select>
      </div>
    </div>
    <div className="control">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Quick filter"/>
        </div>
        <div className="control">
          <a className="button is-info">
            Apply
          </a>
        </div>
      </div>
    </div>
    <div className="control">
      <a className="button is-primary">New Ticket</a>
    </div>
  </div>
);




export default HorizontalButtons;