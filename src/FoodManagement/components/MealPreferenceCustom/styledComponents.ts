import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Layout = styled.div`
   ${tw`flex flex-row items-center justify-between`}
   flex-grow:1;
   width: 300px;
`
const Wrap = styled.div`
   ${tw`flex flex-col `}
   overflow:auto;
`

const Left = styled.div`
   ${tw`flex flex-col`}
`
const Right = styled.div`
   ${tw`flex flex-row justify-end items-center`}
`

export { Layout, Left, Right, Wrap }
