import React, { Component } from 'react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { MealPreferencePage } from '../../components/MealPreferencePage'
import { MealPreference } from '../../components/MealPreference'

import { withHeader } from '../../../Common/hocs/withHeader'
import { MealInfoStore } from "../../stores/MealInfoStore"

interface MealPreferenceRouteProps extends RouteComponentProps{
   onClickSignOut:()=>void,
   onClickGoHome:()=>void
}
interface InjectedProps extends MealPreferenceRouteProps{
   mealInfoStore:MealInfoStore
}

@inject('mealInfoStore')
@observer
class MealPreferenceRoute extends Component<MealPreferenceRouteProps> {
   componentDidMount = () => {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      const { onClickEdit, selectedMealType } = this.getInjectedProps().mealInfoStore
      onClickEdit(selectedMealType)
   }
   getInjectedProps=():InjectedProps=>this.props as InjectedProps
   renderSuccessUI = observer(() => {
      const {
         selectedMealType,
         selectedMealTypeInfo,
      } = this.getInjectedProps().mealInfoStore
      const {updateMealInfo}=this.getInjectedProps().mealInfoStore.selectedMealTypeInfo
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
         ...this.getInjectedProps().mealInfoStore.selectedMealTypeInfo
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
