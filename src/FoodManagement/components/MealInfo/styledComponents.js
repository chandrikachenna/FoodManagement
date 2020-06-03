import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Div = styled.div`
   ${tw`self-center flex justify-center items-end`}
   padding:15px 0px;
   height: 70px;
`
const CardsContainer = styled.div`
   ${tw`flex flex-col xl:flex-row items-center justify-between w-full`}
   width:100%;
   min-height: 400px;
   padding: 0px 100px;
`
export { Div, CardsContainer }
