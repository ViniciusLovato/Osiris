import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './Root.css'

import SidebarContent from '../components/UI/Sidebar/Content';
import NavbarContent from '../components/UI/Navbar/Content';

import TicketsOverview from './Ticket/Overview'
import TicketDetail from './Ticket/Detail';
import TicketForm from './Ticket/Form';

import Dashboard from './Dashboard/Dashboard';

const Root = () => (
  <Router> 
    <div className="grid-container">
      <div className="grid-header">
        <NavbarContent />
      </div>
      <div className="grid-menu">
        <SidebarContent />
      </div>
      <div className="grid-content">
          <Route exact path="/"/>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/tickets/:id" component={TicketDetail} />          
          <Route exact path="/tickets" component={TicketsOverview} />
          <Route path="/createTicket" component={TicketForm} />
      </div>
    </div>
  </Router>
); 

export default Root;