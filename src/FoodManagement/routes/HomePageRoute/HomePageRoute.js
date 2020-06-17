import React, { Component } from 'react'
import { HomePage } from '../../components/HomePage'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Mealcards } from '../../components/Mealcards'
import { format } from 'date-fns'
import { withHeader } from '../../../Common/hocs/withHeader'
import { getLoadingStatus } from '@ib/api-utils'

@inject('mealInfoStore')
@observer
class HomePageRoute extends Component {
   componentDidMount() {
      this.props.mealInfoStore.getMealInfoAPIStatus = 0
      this.doNetworkCalls()
   }
   
   doNetworkCalls = () => {
      setTimeout(() => {
         const date = format(
            new Date(this.props.mealInfoStore.timeCounter),
            'yyyy-MM-dd'
         )
         this.props.mealInfoStore.getMealInfo(date)
      }, 1000)
   }

   renderSuccessUI = observer(() => {
      return (
         <Mealcards
            mealInfoList={this.props.mealInfoStore.mealInfo}
            timeCounter={this.props.mealInfoStore.timeCounter}
            mealInfoStore={this.props.mealInfoStore}
         />
      )
   })

   render() {
      const {
         getMealInfoAPIStatus,
         getMealInfoAPIError,
         timeCounter
      } = this.props.mealInfoStore
      return (
         <HomePage
            onClickSignOut={this.props.onClickSignOut}
            mealInfoList={this.props.mealInfoStore.mealInfo}
            onClickEdit={this.props.mealInfoStore.onClickEdit}
            mealInfoStore={this.props.mealInfoStore}
            onClickGoHome={this.props.onClickGoHome}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
            getMealInfoAPIStatus={getMealInfoAPIStatus}
            getMealInfoAPIError={getMealInfoAPIError}
         />
      )
   }
   
}

export default withRouter(withHeader(HomePageRoute))
