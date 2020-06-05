import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../Common/theme/Colors'
import { Typo32DarkBlueGreyRubikRegular } from '../../../Common/styleGuide/Typo'

const MainPageContainer = styled.div`
   ${tw`flex justify-center items-center `}
   height:100vh;
   background-color: #f1f7ff;
`
const SignInForm = styled.div`
   ${tw`flex flex-col justify-around items-center`}
   padding-top:50px;
   padding-bottom: 70px;
   padding-left: 40px;
   padding-right: 40px;
   border-radius: 8px;
   background-color: ${COLORS.white};
`
const MsgShowField = styled.span`
   ${tw`text-red-700 text-sm self-center`}
   height:30px;
`
const Title = styled(Typo32DarkBlueGreyRubikRegular)``
const TitleField = styled.div`
   width: 150px;
   text-align: center;
`
export { MainPageContainer, SignInForm, Title, MsgShowField, TitleField }
