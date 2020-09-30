import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import './day.component.css';

export default class DayComponent extends Component {

  render() {
    const { year, month, day } = this.props;
    const today = new Date(year, month - 1, day);
    const isToday = (new Date().toDateString() === today.toDateString());

    if (!day) { 
      return ( <div className="day"></div> )
    } 

    return (
      <Link 
        to={ `/year/${year}/month/${month}/day/${day}` } 
        className={ classnames({ day: true, today: isToday, 'has-todos': !isEmpty(this.props.todos)}) }>
        <div>
          { day || null }  
        </div>
      </Link>
    )
  }
}
