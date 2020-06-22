import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { MealPreferencePage } from '../../components/MealPreferencePage'
import { MealPreference } from '../../components/MealPreference'

import { withHeader } from '../../../Common/hocs/withHeader'
import { MealInfoStore } from "../../stores/MealInfoStore"

interface MealPreferenceRouteProps{
   mealInfoStore:MealInfoStore,
   onClickSignOut:()=>void,
   onClickGoHome:()=>void
}

@inject('mealInfoStore')
@observer
class MealPreferenceRoute extends Component<MealPreferenceRouteProps> {
   componentDidMount = () => {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      const { onClickEdit, selectedMealType } = this.props.mealInfoStore
      onClickEdit(selectedMealType)
   }
   renderSuccessUI = observer(() => {
      const {
         selectedMealType,
         selectedMealTypeInfo,
      } = this.props.mealInfoStore
      const {updateMealInfo}=this.props.mealInfoStore.selectedMealTypeInfo
      return (
         <MealPreference
            selectedMealTypeInfo={selectedMealTypeInfo}
            selectedMealType={selectedMealType}
            updateMealInfo={updateMealInfo}
         />
      )
   })
   render() {
      const selectedMealTypeInfo = {
         ...this.props.mealInfoStore.selectedMealTypeInfo
      }
      const {
         getMealItemsAPIStatus,
         getMealItemsAPIError
      } = selectedMealTypeInfo
      return (
         <MealPreferencePage
            onClickSignOut={this.props.onClickSignOut}
            onClickGoHome={this.props.onClickGoHome}
            getMealItemsAPIStatus={getMealItemsAPIStatus}
            getMealItemsAPIError={getMealItemsAPIError}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export default withRouter(withHeader(MealPreferenceRoute))
