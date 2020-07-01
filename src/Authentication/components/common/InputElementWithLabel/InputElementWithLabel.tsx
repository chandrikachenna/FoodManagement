import React, { Component } from 'react'
import { Div, MessageBox, Label } from './styledComponents'
import { InputFormElement } from '../../../../Common/components/InputFormElement'
import { observer } from 'mobx-react'

interface InputElementWithLabelProps {
   label: string
   value: string
   type: string
   placeholder: string
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   message: string
   forwardRef: React.RefObject<HTMLInputElement> | any
}

@observer
class InputElementWithLabel extends Component<InputElementWithLabelProps> {
   render() {
      // let { props, ref } = React.forwardRef((props, ref) => ({ props, ref }))
      const {
         label,
         value,
         type,
         placeholder,
         onChange,
         message,
         forwardRef
      } = this.props
      return (
         <Div>
            <Label>{label}</Label>
            <InputFormElement
               forwardRef={forwardRef}
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

// export { InputElementWithLabel }

export default React.forwardRef<HTMLInputElement, InputElementWithLabelProps>(
   (props, ref) => <InputElementWithLabel forwardRef={ref} {...props} />
)
