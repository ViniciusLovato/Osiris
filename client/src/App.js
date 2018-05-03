import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import SidebarContent from './sidebarContent/SidebarContent';

import './App.css';
import Navbar from './navbar/Navbar';
import List from './list/List';
import Dashboard from './dashboard/Dashboard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    var sidebar = <SidebarContent/>;

    return (
      <Router> 
        <Sidebar sidebar={sidebar}
          open={this.state.sidebarOpen}
          docked={true}
          onSetOpen={this.onSetSidebarOpen}>
          <Navbar />
            <div>
              <Route exact path="/"/>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/list" component={List} />
            </div>
        </Sidebar>
      </Router>
      
    );
  }
}

export default App;