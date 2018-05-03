import React from 'react';
import { Link } from "react-router-dom";

import './Sidebar.css'

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
        <aside class="menu">
          <p class="menu-label">
            Overview
          </p>
          <ul class="menu-list">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/list">Tickets</Link></li>
            <li>
              <ul>
                <li><a>Activity</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><a>Settings</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SidebarContent;