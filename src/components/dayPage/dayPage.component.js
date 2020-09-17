import React, { Component } from 'react'

export default class DayPageComponent extends Component {


  render() {  
    let month = String(new Date().getMonth() + 1);
    let day = String(new Date().getDate());
    const year = String(new Date().getFullYear());   

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return (
      <div className="today-day">        
        {`${day}/${month}/${year}`}
      </div> 
    )
  }
}
