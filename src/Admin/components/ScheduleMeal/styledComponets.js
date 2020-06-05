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
const Content = styled.div`
   ${tw``}
   height:500px;
   border: 1px solid black;
`

export { Buttons, Layout, Content }
