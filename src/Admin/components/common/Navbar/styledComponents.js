import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo20DarkBlueGreyHKGroteskMedium } from '../../../../Common/styleGuide/Typo'

const PageLink = styled(Typo20DarkBlueGreyHKGroteskMedium)`
   ${tw`cursor-pointer`}
   color:${props => props.color || 'black'}
`

const Navbarcontainer = styled.div`
   width: 1440px;
   height: 90px;
   box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
   background-color: #ffffff;
   ${tw`flex flex-col max-w-full`}
`
const SubNav = styled.div`
   ${tw`flex flex-row justify-between items-center px-8 `}
   flex-grow:2;
`
const OptionsBar = styled.div`
   ${tw`lg:flex hidden flex-row-reverse justify-around items-center`}
   flex-grow:1
`
const Div = styled.div`
   ${tw`flex flex-row justify-between w-full`};
`
const SpareOptionsBar = styled.div`
   ${tw`lg:hidden flex flex-col-reverse justify-center items-center`}
   height: 90px;
   background-color: #ffffff;
`

const Button=styled.button`

`

export { Navbarcontainer, SubNav, OptionsBar, Div, SpareOptionsBar, PageLink ,Button}
