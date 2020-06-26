import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Layout = styled.div`
   ${tw`flex flex-row `}
`
const Text = styled.p`
   ${tw``}
`
const Div = styled.div`
   ${tw`flex flex-col`}
   flex-grow:1
`
const Items = styled.div`
   ${tw`flex flex-col items-start`}
`
export { Layout, Text, Div, Items }
