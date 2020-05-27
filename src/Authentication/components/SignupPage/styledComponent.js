import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const MainPageContainer = styled.div`
    ${tw`flex justify-center items-center min-h-screen`}
    background-color:#f1f7ff;
`
const SignupForm = styled.div`
    ${tw`flex flex-col justify-around items-center`}
    width: 536px;
    height: 687px;
    margin:168px 452px;
    padding-top:50px;
    padding-bottom:70px;
    border-radius: 8px;
    background-color:#ffffff;
`
const IBHUBSLogo = styled.img`
    width: 90px;    
    height: 90px;
    object-fit: contain;
`

export {MainPageContainer,SignupForm,IBHUBSLogo}