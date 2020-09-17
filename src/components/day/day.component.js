import React, { Component } from 'react';
import classnames from 'classnames';

import './day.component.css';

export default class DayComponent extends Component {
  render() {
    const date = this.props.date;
    const isToday = date && (new Date().toDateString() === date.toDateString());

    return (
      <div className={classnames({ day: true, today: isToday })}>
        {date ? date.getDate() : null}  
      </div>
    )
  }
}
