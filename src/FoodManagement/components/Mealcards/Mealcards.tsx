import React, { Component } from 'react'
import { MealInfoCard } from '../common/MealnfoCard'
import BreakFastIcon from '../../../Common/icons/breakfast_icon.svg'
import LunchIcon from '../../../Common/icons/lunch_icon.svg'
import DinnerIcon from '../../../Common/icons/dinner_icon.svg'
import { Div } from './styledComponents'
import { MealInfoStore } from "../../stores/MealInfoStore"
import { GetMealInfoResponse } from "../../stores/types"
const mealTypeIcons = {
   0: BreakFastIcon,
   1: LunchIcon,
   2: DinnerIcon
}
interface MealcardsProps{
   mealInfoStore:MealInfoStore
   mealInfoList:GetMealInfoResponse|null
   timeCounter:Date|number|string
}

class Mealcards extends Component<MealcardsProps> {
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      let list:any = []
      if(mealInfoList){
         Object.entries(mealInfoList).forEach(([key, value], index) => {
            value.meal_icon = mealTypeIcons[index]
            list.push(value)
         })
      }
      return (
         <Div data-testid='meal-cards-display'>
            {list &&
               list.map(info => (
                  <MealInfoCard
                     key={Math.random().toString()}
                     info={info}
                     mealInfoStore={mealInfoStore}
                  />
               ))}
         </Div>
      )
   }
}

export { Mealcards }
