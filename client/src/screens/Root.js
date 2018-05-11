import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../components/UI/Navbar/Navbar';
import FlexContainer from '../components/UI/FlexContainer/FlexContainer';

import TicketsOverview from './Ticket/Overview'
import Dashboard from './Dashboard/Dashboard';
import TicketForm from './Ticket/Form';

const Root = () => (
  <Router> 
    <div>
      <Navbar />
      <FlexContainer>
        <Route exact path="/"/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tickets" component={TicketsOverview} />
        <Route path="/createTicket" component={TicketForm} />
      </FlexContainer>
    </div>
  </Router>
); 

export default Root;