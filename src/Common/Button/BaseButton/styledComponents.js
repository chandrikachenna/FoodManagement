import styled from '@emotion/styled'

export const ButtonWrapper = styled.button`
   background-color: ${props => (props.disabled ? 'grey' : 'blue')};
   cursor: ${props => (props.disabled ? 'none' : 'pointer')};
`
