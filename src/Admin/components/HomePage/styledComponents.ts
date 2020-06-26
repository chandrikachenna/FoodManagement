import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../Common/theme/Colors'

const HomePageContainer = styled.div`
   ${tw`flex flex-col min-h-screen  justify-start `}
   background-color:#fbfbfb;
`
const Body = styled.div`
   ${tw`flex flex-col `}
   margin-top:100px;
   margin-left: 260px;
   margin-right: 260px;
`

export { HomePageContainer, Body }
