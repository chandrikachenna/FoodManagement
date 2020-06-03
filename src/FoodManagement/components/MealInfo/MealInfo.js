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
      this.date = date
      const { onChangeDate } = this.props.mealInfoStore
      onChangeDate(this.date)
   }
   render() {
      const { mealInfoList, mealInfoStore } = this.props
      return (
         <>
            <Carousel />
            <Div>
               <DatePicker selected={this.date} onChange={this.handleChange} />
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
