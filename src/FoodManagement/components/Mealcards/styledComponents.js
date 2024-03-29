import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const CardsContainer = styled.div`
   ${tw`flex flex-col xl:flex-row items-center justify-between w-full`}
   min-height:400px;
   padding: 0px 100px;
`
const Div = styled.div`
   ${tw`flex flex-col xl:flex-row  items-center justify-between w-full`}
   flex-grow:1
`
export { CardsContainer, Div }
