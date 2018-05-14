import React from 'react';

import './SidebarContent.css';
import { Link } from "react-router-dom";



// TODO fix this 
const SidebarContent = () => (
  <div className="sidebar-content is-black">
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/tickets">Tickets</Link></li>
    </ul>
  </div>
);
export default SidebarContent;