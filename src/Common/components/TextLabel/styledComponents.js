import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo12InterSemiBold} from '../../../Common/styleGuide/Typo';

const Label=styled.div`
${tw`border border-red-900 flex items-center justify-center`}
width: 80px;
height: 24px;
border-radius: 4px;
`
const Text=styled(Typo12InterSemiBold)`
    ${tw`text-red-900 `}
`
export {Label,Text}