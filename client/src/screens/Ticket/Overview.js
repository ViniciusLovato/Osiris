import React, { Component } from 'react';

import List from '../../components/Ticket/List/List';

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
        </div>
        <div className="tickets-overview-list">
          <List items={this.state.tickets}/>        
        </div>
      </div>  
    );
  }
}

export default TicketsOverview;
