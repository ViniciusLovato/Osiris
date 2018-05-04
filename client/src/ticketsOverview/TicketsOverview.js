import React, { Component } from 'react';

import List from './list/List';
import './TicketsOverview.css';

class TicketsOverview extends Component {
  render() {
    return (   
      <div className="tickets-overview">
        <List/>
      </div>  
    );
  }
}


export default TicketsOverview;
