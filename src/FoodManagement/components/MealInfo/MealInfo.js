import React, { Component } from 'react'
import { Div, CardsContainer } from './styledComponents'
import { Carousel } from '../../common/Carousel'
import { Mealcards } from '../../components/Mealcards'
import {DatePicker} from '../../../Common/components/DatePicker';
import { observer } from 'mobx-react'

@observer
class MealInfo extends Component {
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      const { onChangeDate } = this.props.mealInfoStore
      return (
         <>
            <Carousel />
            <Div>
               <DatePicker onChangeDate={onChangeDate} date={mealInfoStore.timeCounter}/>
            </Div>
            <CardsContainer>
               <Mealcards
                  mealInfoList={mealInfoList}
                  mealInfoStore={mealInfoStore}
               />
            </CardsContainer>
         </>
      )
   }
}

export { MealInfo }
