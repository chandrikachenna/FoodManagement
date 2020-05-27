import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {COLORS} from '../../theme/Colors'

const IconLayout = styled.div`
    ${tw`flex justify-center items-center`}
    width: 44px;
    height: 44px;
    border-radius: 4px;
    border: solid 2px ${COLORS.lightBlueGrey};
    background-color:${COLORS.white};
`
const Icon = styled.img`
    width: 21px;
    height: 20px;
    object-fit: contain;
`
export {IconLayout,Icon}