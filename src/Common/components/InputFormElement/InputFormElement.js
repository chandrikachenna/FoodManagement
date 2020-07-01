import React, { Component } from 'react'
import { InputElement } from './styledComponents'

class InputFormElement extends Component {
   render() {
      const { value, onChange, type, placeholder, forwardRef } = this.props
      return (
         <InputElement
            value={value}
            type={type}
            ref={forwardRef}
            placeholder={placeholder}
            onChange={onChange}
         />
      )
   }
}

export { InputFormElement }
