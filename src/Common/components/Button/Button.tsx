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
type ButtonProps= {
   onClick:()=>void,
   variant:string,
   name:string,
   width:any,
   color:string,
   loadingStatus:number|boolean|undefined,
   disabled:false
}
 

@observer
class Button extends Component<ButtonProps> {
   static defaultProps={
      loadingStatus:200,
      disabled:false,
      color:'white'
   }
   render() {
      const { variant, onClick, name, width, color, loadingStatus } = this.props
      return (
         <ButtonTag onClick={onClick} variant={variant} width={width} color={'white'} >
            {loadingStatus === 100 ? (
               <ClipLoader
                  css={override}
                  size={20}
                  color={'white'}
                  loading={true}
               />
               ) : (
               <Text color={color}>{name}</Text>
            )}
         </ButtonTag>
      )
   }
}


export { Button }
