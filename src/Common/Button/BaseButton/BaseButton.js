import React, { Component } from 'react'
import { ButtonWrapper } from './styledComponents'

class BaseButton extends Component {
   static defaultProps = {
      className: '',
      TextTypo: span
   }
   isEnabled = () => {
      const { disabled } = this.props
      return !disabled
   }
   isClickable = () => {
      const { onClick } = this.props
      let otherProps = {}
      if (this.isEnabled()) {
         otherProps.onClick = onClick
      }
      return otherProps
   }
   render() {
      const {
         className,
         disabled,
         text,
         textTypo: TextTypo,
         buttonCss
      } = this.props
      return (
         <ButtonWrapper
            className={className}
            css={buttonCss}
            {...this.isClickable()}
            disabled={disabled}
         >
            <TextTypo>{text}</TextTypo>
         </ButtonWrapper>
      )
   }
}

export { BaseButton }
