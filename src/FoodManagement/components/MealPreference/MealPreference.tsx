import React, { Component } from 'react'
import { Carousel } from '../common/Carousel'
import { MealPreferenceCard } from '../common/MealPreferenceCard'
import { Div } from './styledComponents'
import { MealInfoItemModel } from "../../stores/models/MealInfoItemModel"

interface MealPreferenceProps{
   selectedMealTypeInfo:MealInfoItemModel
   selectedMealType:string|null
   updateMealInfo:()=>void
}


class MealPreference extends Component<MealPreferenceProps> {
   render() {
      const {
         selectedMealTypeInfo,
         selectedMealType,
         updateMealInfo
      } = this.props
      return (
         <Div data-test-id='meal-preference-page'>
            <Carousel />
            <MealPreferenceCard
               selectedMealTypeInfo={selectedMealTypeInfo}
               selectedMealType={selectedMealType}
               updateMealInfo={updateMealInfo}
            />
         </Div>
      )
   }
}

export { MealPreference }
