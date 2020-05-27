import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class DatePickerComponent extends Component {
    @observable startDate = new Date();
    handleChange = (date) => {
          this.startDate = date
      };   
    render() {
        return (
            <DatePicker
                selected={this.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export {DatePickerComponent} ;