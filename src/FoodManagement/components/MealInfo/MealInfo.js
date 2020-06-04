import React, { Component } from 'react'
import { Div, CardsContainer } from './styledComponents'

import { Mealcards } from '../../components/Mealcards'

import { observer } from 'mobx-react'

@observer
class MealInfo extends Component {
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      
      return (
         
            <CardsContainer>
               <Mealcards
                  mealInfoList={mealInfoList}
                  mealInfoStore={mealInfoStore}
               />
            </CardsContainer>
         
      )
   }
}

export { MealInfo }
