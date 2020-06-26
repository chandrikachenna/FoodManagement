import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo20BlackHKGroteskMedium,
   Typo18SteelHKGroteskMedium
} from '../../../Common/styleGuide/Typo'
const Layout = styled.div`
   width: 782px;
   height: 600px;
   border-radius: 6px;
   box-shadow: 0 4px 40px 0 rgba(23, 31, 70, 0.16);
   border: solid 1px #d7dfe9;
   background-color: white;
   position: absolute;
   z-index: 3;
   top: 332px;
   left: 310px;
   padding: 30px 60px;
   ${tw`flex flex-col flex-grow justify-start items-center`}
`
const Review = styled.div`
   ${tw`flex flex-row w-3/4`}
   flex-grow:1;
   align-self: start;
   margin: 30px 0px;
   overflow: auto;
`

const Title = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   align-self: start;
   height: 50px;
`
const Header = styled.div`
   width: 230px;
   ${tw`flex flex-row-reverse items-center justify-between`}
`
const InfoContainer = styled.div`
   ${tw`flex flex-col items-center justify-around`}
   flex-grow:1;
`

const SubTitle = styled(Typo20BlackHKGroteskMedium)``

const Item = styled(Typo18SteelHKGroteskMedium)``
export { Layout, Title, SubTitle, Header, Review, Item, InfoContainer }
