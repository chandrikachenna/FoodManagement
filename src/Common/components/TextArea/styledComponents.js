import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../Common/theme/Colors'
import { Typo14Steel60HKGroteskRegular } from '../../styleGuide/Typo'
const Area = styled.textarea`
   ${tw``}
   width:516px;
   height: 81px;
   border: 1px solid ${COLORS.lightBlueGrey};
   margin-bottom: 10px;
   align-self: start;
   padding: 10px;
`
const RandomText = styled(Typo14Steel60HKGroteskRegular)``

export { Area, RandomText }
