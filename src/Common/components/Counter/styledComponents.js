import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Layout=styled.div`
    ${tw`flex flex-row`}
`
const Button=styled.button`
    width: 40px;
    height: 40px;
    border: solid 1px #d7dfe9;
    background-color: white;
    text-align:center;
`
export {Button,Layout} 