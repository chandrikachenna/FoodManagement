import styled from '@emotion/styled'
import { BaseButton } from '../BaseButton'

export const OutlineButtonWrapper = styled(BaseButton)`
   background-color: ${props => (props.disabled ? 'grey' : 'white')};
   border: 1px solid grey;
   color:${props => (props.disabled ? 'white' : 'black')}
`
