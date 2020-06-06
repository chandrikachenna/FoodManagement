import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
   Typo16SteelHKGroteskRegular,
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo12SteelHKGroteskRegular
} from '../../../../Common/styleGuide/Typo'

const CardLayout = styled.div`
   ${tw`flex flex-col justify-start items-center`}
   width: 360px;
   height: 304px;
   margin: 15px 0px;
   padding: 25px 22px;
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
   padding-left: 15px;
`
const Label = styled.div`
   ${tw`flex flex-col justify-end items-end flex-wrap`}
   flex-grow:1;
`

const FoodType = styled(Typo16DarkBlueGreyHKGroteskMedium)``

const FoodTimigs = styled(Typo12SteelHKGroteskRegular)``

const FoodItemsContainer = styled.div`
   ${tw`flex flex-row w-full`}
   flex-grow:1;
   padding-top: 20px;
`
const Left = styled.div`
   ${tw`flex flex-col`}
   flex-grow:1;
`
const Right = styled.div`
   ${tw`flex flex-col items-end`}
   flex-grow:1;
`
const Review = styled.div`
   ${tw`flex flex-row justify-between`}
   width:314px;
`

const FoodItem = styled(Typo16SteelHKGroteskRegular)``
export {
   CardLayout,
   Header,
   TitleBox,
   FoodType,
   FoodTimigs,
   FoodItemsContainer,
   Left,
   Right,
   FoodItem,
   Label,
   Review
}
