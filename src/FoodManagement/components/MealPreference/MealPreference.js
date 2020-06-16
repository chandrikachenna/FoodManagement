import React, { Component } from 'react'
import { Carousel } from '../common/Carousel'
import { MealPreferenceCard } from '../common/MealPreferenceCard'

class MealPreference extends Component {
   render() {
      const {
         selectedMealTypeInfo,
         selectedMealType,
         updateMealInfo
      } = this.props
      return (
         <>
            <Carousel />
            <MealPreferenceCard
               selectedMealTypeInfo={selectedMealTypeInfo}
               selectedMealType={selectedMealType}
               updateMealInfo={updateMealInfo}
            />
         </>
      )
   }
}

export { MealPreference }
