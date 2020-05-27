import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo16DarkBlueGreyHKGroteskMedium,Typo12SteelHKGroteskRegular,Typo14WhiteHKGroteskSemiBold} from '../../../Common/styleGuide/Typo'

const CardLayout =  styled.div`
    ${tw`flex flex-col justify-start items-center`}
    width: 360px;
    height: 304px;
    padding:25px 22px;
    border-radius: 4px;
    border: solid 1px #d7dfe9;
    background-color: #ffffff;
`

const Header = styled.div`
    ${tw`flex flex-row justify-start flex-grow self-start`}
    width: 314px;
`
const TitleBox = styled.div`
    ${tw`flex flex-col justify-start flex-wrap`}
    flex-grow:1;
    padding-left:15px;
`
const FoodType = styled(Typo16DarkBlueGreyHKGroteskMedium)``

const ButtonTextLabel = styled(Typo14WhiteHKGroteskSemiBold)``

const FoodTimigs =styled(Typo12SteelHKGroteskRegular)``

const FoodItemsContainer=styled.div`
    ${tw`flex flex-row `}
    flex-grow:1;
    padding-top:30px;
`
const EditPreferenceBox=styled.span`
    ${tw`flex flex-grow flex-row justify-end items-center`}
    width: 314px;
    padding:5px 0px;
`
export {CardLayout,ButtonTextLabel,Header,TitleBox,FoodType,FoodTimigs,FoodItemsContainer,EditPreferenceBox}