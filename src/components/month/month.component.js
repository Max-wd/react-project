import React, { Component } from 'react';

import './month.component.css';

export default class MonthComponent extends Component {

  render() {
    const currentMonth = this.props.startDate;
    const title = currentMonth.toLocaleString('default', { month: 'long' });
    
    const tempDate = new Date(currentMonth );
    const days = [];

    const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    let day = 1;
    while (tempDate.getMonth() === currentMonth.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = currentMonth.getDay(); i > 0; i--) {
      days.unshift('');
    }
    
    

    return (
      <div className="month">
        <div className="month-title"> 
          { title }
        </div>

        <div className="days">
          { dayOfWeek.map(day => <div className="day day-title">{ day }</div>) }
          { days.map(day => <div className="day">{ day }</div>) }
        </div>
      </div>
    );
  }
}