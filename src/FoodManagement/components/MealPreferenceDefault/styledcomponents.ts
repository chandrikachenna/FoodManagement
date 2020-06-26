import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Layout = styled.div`
   ${tw`flex flex-row items-center justify-between`}
   flex-grow:1;
   width: 300px;
`

const Wrap = styled.div`
   ${tw`flex flex-col `}
`
const Left = styled.div`
   ${tw`flex flex-col`}
   flex-grow:1;
`
const Right = styled.div`
   ${tw`flex flex-row`}
`

export { Layout, Left, Right, Wrap }
