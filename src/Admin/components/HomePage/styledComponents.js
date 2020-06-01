import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {COLORS} from '../../../Common/theme/Colors';

const HomePageContainer = styled.div`
    ${tw`flex flex-col min-h-screen  justify-start `}
    background-color:#fbfbfb;
`
const WelcomeCardContainer=styled.div`
    height:542px;
    ${tw`flex items-center justify-center`}
`
const WelcomeCard = styled.div`
width: 782px;
height: 271px;
border-radius: 6px;
box-shadow: 0 4px 40px 0 ${COLORS.darkBlueGrey16};
border: solid 1px ${COLORS.lightBlueGrey};
background-color: ${COLORS.white};
`
export {HomePageContainer,WelcomeCard,WelcomeCardContainer}