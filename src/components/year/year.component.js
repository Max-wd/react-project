import React, { Component } from 'react';
import { Month } from '..';

import './year.component.css';


export default class YearComponent extends Component {

  state = {
    year: new Date().getFullYear(),
  };

  clickNextYearHandler = () => {
    this.setState({
      year: this.state.year + 1
    });
  }

  clickBackYearHandler = () => {
    this.setState({
      year: this.state.year - 1
    });
  }

  render() {
    const months = Array(12).fill(null).map((x, index) => {
      return (<Month startDate={new Date(this.state.year, index, 1)}/>);
    });    

    return (
      <div className="calendar">
        <div className="year"> 
          <button className="btn-left" type="button" onClick={this.clickBackYearHandler}>{'<'}</button> 
            { this.state.year }
          <button className="btn-right" type="button" onClick={this.clickNextYearHandler}>{'>'}</button> 
        </div>

        <div className="months">
          { months }
        </div>
      </div>
    );
  }
}