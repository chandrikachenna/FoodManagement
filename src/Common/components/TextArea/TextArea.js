import React, { Component } from 'react'
import { Area, RandomText } from './styledComponents'
import strings from '../../i18n/strings.json'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class TextArea extends Component {
   @observable value
   onChange = event => {
      this.value = event.target.value
      this.props.onChange(this.value)
   }
   render() {
      const { writeReview } = strings.foodManagement
      return (
         <Area
            placeholder={writeReview}
            onChange={this.onChange}
            value={this.value}
         ></Area>
      )
   }
}

export { TextArea }
