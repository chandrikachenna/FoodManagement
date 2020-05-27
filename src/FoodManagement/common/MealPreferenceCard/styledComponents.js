import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {Typo14WhiteHKGroteskSemiBold} from '../../../Common/styleGuide/Typo'

const CardLayout =  styled.div`
    ${tw`flex flex-col justify-start items-center`}
    width: 360px;
    height: 304px;
    padding:10px 10px;
    border-radius: 4px;
    border: solid 1px #d7dfe9;
    background-color: #ffffff;
`

const Header = styled.div`
    ${tw`flex flex-row justify-start flex-grow`}
`
const ButtonTextLabel = styled(Typo14WhiteHKGroteskSemiBold)``
export {CardLayout,ButtonTextLabel,Header}