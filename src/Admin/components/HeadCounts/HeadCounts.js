import React, { Component } from 'react'

import { MenuDisplayer } from '../common/MenuDisplayer'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings'
import { observer } from 'mobx-react'
import HeadCountsInfo from '../common/HeadCountsInfo'

@observer
class HeadCounts extends Component {
   renderedSuccess = observer(() => {
      return <div>hey..</div>
   })
   render() {
      const { breakfast, lunch, dinner } = strings.admin
      const { data } = this.props
      let headCountsInfo = []
      Object.entries(data.headCountsInfo).forEach(([key, values]) => {
         headCountsInfo.push(values)
      })
      return (
         <>
            <MenuDisplayer
               menu={'Menu1'}
               menu1Name={breakfast}
               menu2Name={lunch}
               menu3Name={dinner}
               data={headCountsInfo}
               tabPane={'headCounts'}
            />
            {/* <HeadCountsInfo headCountsInfo={headCountsInfo[0]} /> */}
         </>
      )
   }
}

export { HeadCounts }
