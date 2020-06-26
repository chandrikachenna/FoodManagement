import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Header = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   width:100%;
`
const Content = styled.div`
   ${tw`flex flex-col`}
   flex-grow:1;
`
export { Header, Content }
