import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class DatePicker extends Component {
   @observable startDate = new Date()
   handleChange = date => {
      if(this.props.onChangeDate){
         this.props.onChangeDate(date)
      }
      this.startDate=date;
   }
   render() {
      const { date } = this.props
      return <ReactDatePicker selected={date || this.startDate} onChange={this.handleChange} />
   }
}

export { DatePicker }
