import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Navbarcontainer = styled.div`
    width: 1440px;
    height: 60px;
    box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
    background-color: #ffffff;
    ${tw`flex flex-row max-w-full`}
`
const SubNav = styled.div`
    ${tw`flex flex-row justify-start items-center px-8 `}
    flex-grow:1;
`
const OptionsBar = styled.div`
    ${tw`flex flex-row-reverse items-center`}
    flex-grow:1;
    justify-content:space-around;
`

export {Navbarcontainer,SubNav,OptionsBar}