import React, { Component } from 'react'
import { MealInfoCard } from '../../common/MealnfoCard'
import BreakFastIcon from '../../../Common/icons/breakfast_icon.svg'
import LunchIcon from '../../../Common/icons/lunch_icon.svg'
import DinnerIcon from '../../../Common/icons/dinner_icon.svg'

const mealTypeIcons = {
   0: BreakFastIcon,
   1: LunchIcon,
   2: DinnerIcon
}

class Mealcards extends Component {
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      let list=[]
      Object.entries(mealInfoList).forEach(([key, value],index) => {
         value.meal_icon = mealTypeIcons[index]
         list.push(value);
      })
      return (
         <>
               {list &&
               list.map(info => (
                  <MealInfoCard
                     key={Math.random().toString()}
                     info={info}
                     mealInfoStore={mealInfoStore}
                  />
               ))}
         </>
      )
   }
}

export { Mealcards }
