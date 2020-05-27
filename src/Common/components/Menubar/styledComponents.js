import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {COLORS} from '../../theme/Colors';

const MenuButton=styled.button`
    ${tw`self-start flex flex-row focus:outline-none cursor-pointer`}
`
const Icon=styled.img`
    width: 16px;
    height: 16px;
    object-fit: contain;
`
export {MenuButton,Icon}