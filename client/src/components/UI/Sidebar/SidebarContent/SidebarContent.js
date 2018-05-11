import React from 'react';
import { Link } from "react-router-dom";

import './Sidebar.css'

// TODO fix this 
const SidebarContent = () => {

  return (
    <div className="sidebar-container">
      <nav className="navbar is-primary" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            Sidebar Header
          </span>
        </div>
      </nav>
      <div>
        <aside className="menu">
          <p className="menu-label">
            Overview
          </p>
          <ul className="menu-list">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/tickets">Tickets</Link></li>
            <li>
              <ul>
                <li><Link to="/createTicket">Create Ticket</Link></li>
                <li><a>Activity</a></li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">
            Administration
          </p>
          <ul className="menu-list">
            <li><a>Settings</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SidebarContent;