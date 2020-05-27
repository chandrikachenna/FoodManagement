import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo16DarkBlueGreyHKGroteskMedium,Typo12SteelHKGroteskRegular,Typo14WhiteHKGroteskSemiBold} from '../../../Common/styleGuide/Typo'

const CardLayout =  styled.div`
    ${tw`flex flex-col justify-start items-center`}
    width: 360px;
    height: 304px;
    padding:10px 22px;
    border-radius: 4px;
    border: solid 1px #d7dfe9;
    background-color: #ffffff;
`

const Header = styled.div`
    ${tw`flex flex-row justify-start flex-grow self-start`}
`
const TitleBox = styled.div`
    ${tw`flex flex-col justify-start flex-wrap flex-grow`}
`
const FoodType = styled(Typo16DarkBlueGreyHKGroteskMedium)``

const ButtonTextLabel = styled(Typo14WhiteHKGroteskSemiBold)``

const FoodTimigs =styled(Typo12SteelHKGroteskRegular)``

export {CardLayout,ButtonTextLabel,Header,TitleBox,FoodType,FoodTimigs}