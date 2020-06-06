import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HomePage } from '../../components/HomePage'
import { observer, inject } from 'mobx-react'
import { withHeader } from '../../../Common/hocs/withHeader'
import { TabBar } from '../../components/common/TabBar'
import { ScheduleMeal } from '../../components/ScheduleMeal'
import { HeadCounts } from '../../components/HeadCounts'
import { FoodWastageLog } from '../../components/FoodWastageLog'

@inject('scheduleMealStore','headCountsStore')
@observer
class HomePageRoute extends Component {
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls=()=>{
      this.props.headCountsStore.getHeadCountsInfo()
   }
   renderSuccessUI = observer(() => {
      return (
         <TabBar
                  renderedComponent1={ScheduleMeal}
                  renderedComponent2={HeadCounts}
                  renderedComponent3={FoodWastageLog}
                  dataForComponent1={this.props.headCountsStore}
               />
      )
   })
   render() {
      const {
         getHeadCountsInfoAPIStatus,
         getHeadCountsInfoAPIError,
      } = this.props.headCountsStore
      return (
         <HomePage
            onClickGoHome={this.props.onClickGoHome}
            onClickSignOut={this.props.onClickSignOut}
            onClickScheduleMeal={this.onClickScheduleMeal}
            getHeadCountsInfoAPIStatus={getHeadCountsInfoAPIStatus}
            getHeadCountsInfoAPIError={getHeadCountsInfoAPIError}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export default withRouter(withHeader(HomePageRoute))
