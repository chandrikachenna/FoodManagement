import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Input = styled.input`
border: solid 1px lightgrey;
background-color: white;
${tw`focus:outline-none`}
`

export const InputWrapper=styled.div`
    width:250px;
    ${tw`flex flex-col`}
`

export const ErrorMessage=styled.span`
   height:25px;
   font-size:14px;
   color:red;
`