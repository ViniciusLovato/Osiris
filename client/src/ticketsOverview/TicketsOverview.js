import React, { Component } from 'react';

import List from './list/List';
import './TicketsOverview.css';

class TicketsOverview extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Change this to correct end point
    fetch(`/api/tickets`)
    .then( response => response.json())
    .then( data => {
      const items = data.tickets;
      console.log(items);
      this.setState({ items });
    });
  }

  render() {
    return (   
      <div className="tickets-overview">
        <List items={this.state.items}/>
      </div>  
    );
  }
}


export default TicketsOverview;
