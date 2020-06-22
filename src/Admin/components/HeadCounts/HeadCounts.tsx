import React, { Component } from 'react'

import { MenuDisplayer } from '../common/MenuDisplayer'
import strings from '../../../Common/i18n/strings.json'
import { observer } from 'mobx-react'
import HeadCountsInfo from '../common/HeadCountsInfo'
type Data={
   headCountsInfo:object[],
}

interface HeadCountsProps{
   data:Data,
}

@observer
class HeadCounts extends Component<HeadCountsProps> {
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
               renderedComponent={HeadCountsInfo}
            />
         </>
      )
   }
}

export { HeadCounts }
