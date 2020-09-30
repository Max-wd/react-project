import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Day } from '..';
import { get } from 'lodash';

import './month.component.css';

export default class MonthComponent extends Component {

  render() {
    const { year, month } = this.props;  
    const startDate = new Date(year, month - 1);
    const title = startDate.toLocaleString('default', { month: 'long' });
    
    const tempDate = new Date(startDate);
    const days = [];

    const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    let day = 1;
    tempDate.setDate(day);

    while (tempDate.getMonth() === startDate.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = startDate.getDay(); i > 0; i--) {
      days.unshift(null);
    }      

    return (
      <div className="month">
        <div className="month-title"> 
          <Link to={`/year/${year}/month/${month}`}>
            { title }
          </Link>
        </div>

        <div className="days">
          { dayOfWeek.map((day, index) => <div key={'title' + index} className="day day-title">{ day }</div>) }
          { days.map((day, index) => <Day 
            key={index} 
            day={day} 
            year={this.props.year} 
            month={this.props.month} 
            todos={get(this.props.todos, [day], [])} 
          />) }
        </div>
      </div>
    );
  }
}
