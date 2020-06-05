import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo12SteelHKGroteskSemiBold } from '../../../../Common/styleGuide/Typo'

const Div = styled.div`
   ${tw`flex flex-col items-start`}
`
const MessageBox = styled.span`
   height: 30px;
`
const Label = styled(Typo12SteelHKGroteskSemiBold)`
   margin-bottom: 6px;
`

export { Div, MessageBox, Label }
