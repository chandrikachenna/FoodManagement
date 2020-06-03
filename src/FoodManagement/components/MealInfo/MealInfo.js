import React, { Component } from 'react'
import { Div, CardsContainer } from './styledComponents'
import { Carousel } from '../../common/Carousel'
// import {DatePicker} from '../../../Common/components/DatePicker';
import { Mealcards } from '../../components/Mealcards'

import DatePicker from 'react-datepicker'
import { observable } from 'mobx'
import { compareAsc, format, formatDistance } from 'date-fns'
import { observer } from 'mobx-react'

@observer
class MealInfo extends Component {
   @observable date = new Date()
   handleChange = date => {
      const { onChangeDate } = this.props.mealInfoStore
      onChangeDate(date)
   }
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      return (
         <>
            <Carousel />
            <Div>
               <DatePicker selected={mealInfoStore.timeCounter} onChange={this.handleChange} />
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
