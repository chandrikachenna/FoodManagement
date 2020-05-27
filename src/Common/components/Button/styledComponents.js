import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {COLORS} from '../../theme/Colors'

const ButtonTag = styled.button`
    
    border-radius: 4px;
    background-color: ${COLORS.brightBlue};
    ${tw`flex justify-center items-center`}
`
export {ButtonTag}