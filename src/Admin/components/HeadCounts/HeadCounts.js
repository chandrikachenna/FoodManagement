import React, { Component } from 'react'

import { MenuDisplayer } from '../common/MenuDisplayer'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings'

class HeadCounts extends Component {
   render() {
      const { breakfast, lunch, dinner } = strings.admin
      return (
         <>
            <MenuDisplayer
               menu={'Menu1'}
               menu1Name={breakfast}
               menu2Name={lunch}
               menu3Name={dinner}
            />
         </>
      )
   }
}

export { HeadCounts }
