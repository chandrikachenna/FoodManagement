import React, { Component } from 'react'
import { Div, MessageBox, Label } from './styledComponents'
import { InputFormElement } from '../../../../Common/components/InputFormElement'
import { observer } from 'mobx-react'

interface InputElementWithLabelProps{
   label:string,
   value:string,
   type:string,
   placeholder:string,
   onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
   message:string
}


@observer
class InputElementWithLabel extends Component<InputElementWithLabelProps> {
   render() {
      const { label, value, type, placeholder, onChange, message } = this.props
      return (
         <Div>
            <Label>{label}</Label>
            <InputFormElement
               value={value}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
            />
            <MessageBox>{message && message}</MessageBox>
         </Div>
      )
   }
}

export { InputElementWithLabel }
