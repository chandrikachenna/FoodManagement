import React, { Component } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class DatePicker extends Component {
   @observable startDate = new Date()
   handleChange = date => {
      this.props.onChangeDate(date)
   }
   render() {
      const { date } = this.props
      return <ReactDatePicker selected={date} onChange={this.handleChange} />
   }
}

export { DatePicker }
