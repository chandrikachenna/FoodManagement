import React, { Component } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class DatePicker extends Component {
    @observable startDate = new Date();
    handleChange = (date) => {
          this.startDate = date
      };   
    render() {
        return (
            <ReactDatePicker
                selected={this.startDate}
  
  
  
  
  
  
  
  
  
  
  
  
                onChange={this.handleChange}
            />
        );
    }
}

export {DatePicker} ;