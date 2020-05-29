import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo32DarkBlueGreyHKGroteskMedium} from '../../../Common/styleGuide/Typo'
const Layout = styled.div`
  width: 782px;
  height: 600px;
  border-radius: 6px;
  box-shadow: 0 4px 40px 0 rgba(23, 31, 70, 0.16);
  border: solid 1px #d7dfe9;
  background-color: white;
  position:absolute;
  z-index:3;
  top:332px;
  left:310px;   
  padding:30px 60px;
  ${tw`flex flex-col flex-grow justify-center`}
`
const Header=styled.div`
${tw`flex flex-row justify-between`}  
padding-bottom:50px
`
const Footer=styled.div`
  ${tw`self-center flex flex-row justify-between`}  
  width:250px;
`
const InfoBox=styled.div`
  flex-grow:1;
  padding:20px 0px
`
const Title=styled(Typo32DarkBlueGreyHKGroteskMedium)`
`

const SelectionField=styled.div`
    ${tw`flex flex-row items-center`}
`
export {Layout,Header,Footer,InfoBox,Title,SelectionField}