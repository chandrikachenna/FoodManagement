import styled from '@emotion/styled';
import tw from 'tailwind.macro'
import {COLORS} from '../../../Common/theme/Colors'

const Div = styled.div`
    ${tw`flex flex-col items-start`}
`

const InputElement = styled.input`
    width: 320px;
    height: 40px;
    border-radius: 2px;
    border: solid 1px ${COLORS.steel};
    background-color: ${COLORS.white};
`

export {Div,InputElement}