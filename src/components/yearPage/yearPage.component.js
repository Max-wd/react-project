import React, { Component } from 'react';
import { Month } from '..';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import './yearPage.component.css';

export default class YearPageComponent extends Component {

  render() {     
    const months = Array(12).fill(null).map((x, index) => index + 1);
  
    return (
      <div className="calendar">
        <div className="year"> 
          <Link to={`/year/${this.props.year - 1}`}> 
            <button className="btn-left" type="button">{'<'}</button> 
          </Link>
          { this.props.year }
          <Link to={`/year/${Number(this.props.year) + 1}`}>
            <button className="btn-right" type="button">{'>'}</button> 
          </Link>
        </div>

        <div className="months">
          { months.map(month => (
            <Month 
              key={month} 
              year={this.props.year}
              month={month}
              todos={get(this.props.todos, month, {})}
            />
          ))}
        </div>
      </div>
    );
  }
}
