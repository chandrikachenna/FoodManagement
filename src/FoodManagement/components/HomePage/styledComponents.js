import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const HomePageContainer = styled.div`
   ${tw`flex flex-col min-h-screen  justify-start `}
   background-color:#fbfbfb;
`
const Div = styled.div`
${tw`self-center flex justify-center items-end`}
padding:15px 0px;
height: 70px;
`
export { HomePageContainer ,Div}
