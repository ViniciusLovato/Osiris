import React, { Component } from 'react';

import List from '../../components/Ticket/List/List';
import './Overview.css';

import api from '../../API/API';

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
        <List items={this.state.tickets}/>
      </div>  
    );
  }
}

export default TicketsOverview;
