import React, { Component } from 'react';

import List from '../../components/Ticket/List/List';
import HorizontalButtons from '../../components/Ticket/HorizontalButtons/HorizontalButtons';
import Filter from '../../components/Ticket/Filter/Filter';

import api from '../../API/API';


import './Overview.css';


class TicketsOverview extends Component {

  constructor(props){
    super(props);
    this.state = {
      tickets: [],
    };
  }

  componentDidMount() {
    api.tickets().getAll().then( tickets => this.setState({ tickets }))
  }

  render() {
    return (   
      <div className="tickets-overview">
        <div className="tickets-overview-horizontal-buttons">
          <HorizontalButtons/>
        </div>
        <div className="tickets-overview-list">
          <List items={this.state.tickets}/>        
        </div>
        <div className="tickets-overview-filter">
          <Filter/>
        </div>
      </div>  
    );
  }
}

export default TicketsOverview;
