import React, { Component } from 'react'
import { ButtonTag, Text } from './styledComponents'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
   display: block;
   margin: 0 auto;
   border-color: white;
`

@observer
class Button extends Component {
   render() {
      const { variant, onClick, name, width, color, loadingStatus } = this.props
      return (
         <ButtonTag onClick={onClick} variant={variant} width={width}>
            {loadingStatus === 100 ? (
               <ClipLoader
                  css={override}
                  size={20}
                  color={'white'}
                  loading={loadingStatus}
               />
            ) : (
               <Text color={color}>{name}</Text>
            )}
         </ButtonTag>
      )
   }
}

export { Button }
