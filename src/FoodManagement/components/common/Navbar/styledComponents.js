import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo20DarkBlueGreyHKGroteskMedium } from '../../../../Common/styleGuide/Typo'

const Text = styled(Typo20DarkBlueGreyHKGroteskMedium)``
const Link = styled.button`
   ${tw`cursor-pointer`}
   border:none
`

const Navbarcontainer = styled.div`
   width: vw;
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
   ${tw`lg:hidden flex flex-row-reverse justify-around items-center`}
   height: 60px;
   box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
   background-color: #ffffff;
`

export { Navbarcontainer, SubNav, OptionsBar, Div, SpareOptionsBar, Link, Text }
