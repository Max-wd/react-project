import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.component.css';

export default class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/year/current">
          <div>Current Year</div>        
        </Link>

        <Link to="/year/current/month/current">
          <div>Current Month</div>        
        </Link>

        <Link to="/today">
          <div>Today</div>        
        </Link>        
      </div>
    )
  }
}
