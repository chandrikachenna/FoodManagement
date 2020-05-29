import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo14HKGrotesk} from '../../../Common/styleGuide/Typo';

const ButtonTag = styled.button`
    height:40px;
    border-radius: 4px;
    background-color: green;
    ${tw`flex justify-center items-center`}
`
const Text =  styled(Typo14HKGrotesk)`
    color:black;
    text-align:center;
`
export {ButtonTag,Text}
