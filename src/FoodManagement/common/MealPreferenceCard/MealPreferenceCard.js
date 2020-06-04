import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import {
   Layout,
   Header,
   Footer,
   InfoBox,
   Title,
   SelectionField,
   ImageHolder,
   Wrap
} from './styledComponents'

import { MealPreferenceCustom } from '../../components/MealPreferenceCustom'
import { MealPreferenceDefault } from '../../components/MealPreferenceDefault'

import { DatePicker } from '../../../Common/components/DatePicker'
import {
   TabBar,
   TabExampleDefaultActiveIndex
} from '../../../Common/components/TabBar'
import FoodPreferenceImage from '../../../Common/images/foodPreference.png'
import { Button } from '../../../Common/components/Button'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings.json'

@observer
class MealPreferenceCard extends Component {
   mealType
   @observable mealFormate = 'full_meal'
   constructor(props) {
      super(props)
      const { match } = this.props
   }
   onClick = () => {
      const { history } = this.props
      history.push('/food-management/home')
   }
   onClikFullMeal = () => {
      this.mealFormate = 'full_meal'
   }
   onClikHalfMeal = () => {
      this.mealFormate = 'half_meal'
   }
   onClikCustom = () => {
      this.mealFormate = 'custom'
   }
   render() {
      const { skipMeal, back, save } = strings.foodManagement
      const { mealType, mealItemsInfo, date } = {
         ...this.props.selectedMealTypeInfo
      }
      const { onChangeDate } = this.props.selectedMealTypeInfo
      return (
         <Layout>
            <Header>
               <Title>{mealType}</Title>
               <Button
                  variant={COLORS.white}
                  onClick={this.onClick}
                  width={'102px'}
                  name={skipMeal}
                  color={COLORS.black}
               />
            </Header>
            <SelectionField>
               <TabBar
                  onClikFullMeal={this.onClikFullMeal}
                  onClikHalfMeal={this.onClikHalfMeal}
                  onClikCustom={this.onClikCustom}
               />
               <DatePicker onChangeDate={onChangeDate} date={date} />
            </SelectionField>
            <InfoBox>
               <Wrap>
                  {this.mealFormate.match('full_meal') && (
                     <MealPreferenceDefault mealItems={mealItemsInfo[0]} />
                  )}
                  {this.mealFormate.match('half_meal') && (
                     <MealPreferenceDefault mealItems={mealItemsInfo[1]} />
                  )}
                  {this.mealFormate.match('custom') && (
                     <MealPreferenceCustom mealItems={mealItemsInfo[2]} />
                  )}
               </Wrap>
               <ImageHolder src={FoodPreferenceImage} />
            </InfoBox>
            <Footer>
               <Button
                  variant={COLORS.white}
                  onClick={this.onClick}
                  width={'71px'}
                  name={back}
                  color={COLORS.black}
               />
               <Button
                  variant={COLORS.white}
                  onClick={this.onClick}
                  width={'71px'}
                  name={save}
                  color={COLORS.black}
               />
            </Footer>
         </Layout>
      )
   }
}

export default withRouter(MealPreferenceCard)
