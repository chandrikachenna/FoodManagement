import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../../Common/theme/Colors'
import {
   Typo18SteelHKGroteskMedium,
   Typo12CoolGreyHKGroteskRegular
} from '../../../../Common/styleGuide/Typo'

const Layout = styled.div`
   width: 650px;
   ${tw`flex flex-row justify-between items-center`}
`
const ItemInfo = styled.div`
   ${tw`flex flex-col`}
   width:120px;
`
const Item = styled(Typo18SteelHKGroteskMedium)``
const Category = styled(Typo12CoolGreyHKGroteskRegular)``
const Icon = styled.img``

export { Layout, ItemInfo, Item, Category, Icon }
