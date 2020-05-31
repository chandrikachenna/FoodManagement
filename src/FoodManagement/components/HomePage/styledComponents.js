import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo14WhiteRubikMedium} from '../../../Common/styleGuide/Typo'
const HomePageContainer = styled.div`
    ${tw`flex flex-col min-h-screen justify-between `}
    background-color:#fbfbfb;
`
const Div=styled.div`
    ${tw`self-center flex justify-center items-end`}
    padding:15px 0px;
    height:70px;
`
const CardsContainer=styled.div`
    ${tw`flex flex-col xl:flex-row items-center justify-between w-full`}
    width:100%;
    min-height:400px;
    padding:0px 100px;
`
const ButtonTextLabel = styled(Typo14WhiteRubikMedium)``

export {HomePageContainer,Div,ButtonTextLabel,CardsContainer}