import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../Common/theme/Colors'

const Buttons = styled.div`
   ${tw`flex flex-row justify-end`}
`
const Layout = styled.div`
   ${tw`flex flex-row justify-between`}
   width:150px;
`

export { Buttons, Layout }
