import React, { Component } from 'react'
import { Div, MessageBox, Label } from './styledComponents'
import { InputFormElement } from '../../../../Common/components/InputFormElement'
import { observer } from 'mobx-react'

@observer
class InputElementWithLabel extends Component {
   render() {
      const { label, value, type, placeholder, onChange } = this.props
      return (
         <Div>
            <Label>{label}</Label>
            <InputFormElement
               value={value}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
            />
            <MessageBox></MessageBox>
         </Div>
      )
   }
}

export { InputElementWithLabel }
