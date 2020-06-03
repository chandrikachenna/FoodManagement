import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../Common/theme/Colors'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo16BrightBlueHKGroteskMedium
} from '../../../Common/styleGuide/Typo'
const HomePageContainer = styled.div`
   ${tw`flex flex-col min-h-screen  justify-start `}
   background-color:#fbfbfb;
`
const WelcomeCardContainer = styled.div`
   height: 542px;
   ${tw`flex  items-center justify-center`}
`
const WelcomeCard = styled.div`
   width: 782px;
   height: 271px;
   border-radius: 6px;
   box-shadow: 0 4px 40px 0 ${COLORS.darkBlueGrey16};
   border: solid 1px ${COLORS.lightBlueGrey};
   background-color: ${COLORS.white};
   ${tw`flex flex-row justify-between items-center`}
   padding:18px 25px;
`

const Image = styled.img`
   width: 276px;
   height: 196px;
   object-fit: contain;
`
const CardInfo = styled.div`
   ${tw`flex flex-col`}
`
const Title = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   padding-bottom: 10px;
   border-bottom: 1px solid ${COLORS.brightBlue};
`
const Text = styled(Typo16BrightBlueHKGroteskMedium)`
   padding-top: 5px;
   border-bottom: 1px solid ${COLORS.brightBlue};
`
const Link = styled.a``

const Links = styled.div`
   ${tw`flex flex-col`}
`

export {
   HomePageContainer,
   WelcomeCard,
   WelcomeCardContainer,
   Image,
   CardInfo,
   Title,
   Text,
   Links,
   Link
}
