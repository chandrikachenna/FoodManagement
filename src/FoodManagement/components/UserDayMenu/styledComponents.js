import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container=styled.div`
    ${tw`flex flex-col items-center justify-around `}
    height:470px;
`
const Div=styled.div`
    ${tw`self-center w-full flex items-center justify-center`}
    flex-grow:1;
    padding:25px 0px;
`
const Cards=styled.div`
    ${tw`flex items-center justify-between w-full`}
    flex-grow:4;
    padding-left:100px;
    padding-right:100px;
`
export {Container,Div,Cards}