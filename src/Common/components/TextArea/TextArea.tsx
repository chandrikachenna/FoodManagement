import React, { Component } from 'react'
import { Area, RandomText } from './styledComponents'
import strings from '../../i18n/strings.json'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

interface TextAreaProps{
   onChange:(event:React.ChangeEvent<HTMLTextAreaElement>)=>void
   value:string
}

@observer
class TextArea extends Component<TextAreaProps> {
   @observable value
   onChange = (event:React.ChangeEvent<HTMLTextAreaElement>):void=> {
      this.value = event.target.value
      this.props.onChange(this.value)
   }
   render() {
      const { writeReview } = strings.foodManagement
      return (
         <Area
            placeholder={writeReview}
            onChange={this.onChange}
            value={this.props.value}
         ></Area>
      )
   }
}

export { TextArea }
