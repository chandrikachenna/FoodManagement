import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Header = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   width:100%;
   padding-bottom:20px;
`
const Content = styled.div`
   ${tw`flex flex-col`}
   flex-grow:1;
   padding-left:10px;
   padding-right:10px;
   padding-bottom:10px;
`
export { Header, Content }
