import React, { Component } from 'react'
import { Carousel } from '../common/Carousel'
import { MealPreferenceCard } from '../common/MealPreferenceCard'
import {Div} from './styledComponents'

class MealPreference extends Component {
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
