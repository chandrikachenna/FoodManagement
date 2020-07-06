import React, { Component } from 'react'

import { ButtonWrapper } from './styledComponents'
class BaseButton extends Component {
   static defaultProps = {
      className: ''
      // TextTypo: span
   }
   isEnabled = () => {
      const { disabled } = this.props
      return !disabled
   }
   render() {
      const {
         className,
         onClick,
         disabled,
         text,
         textTypo: TextTypo,
         buttonCss
      } = this.props
      let otherProps = {}
      if (this.isEnabled()) {
         otherProps.onClick = onClick
      }
      return (
         <ButtonWrapper
            className={className}
            css={buttonCss}
            {...otherProps}
            disabled={disabled}
         >
            <TextTypo>{text}</TextTypo>
         </ButtonWrapper>
      )
   }
}

export { BaseButton }
