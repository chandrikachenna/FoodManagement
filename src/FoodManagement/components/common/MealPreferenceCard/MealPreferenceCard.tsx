import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter,RouterProps } from 'react-router-dom'

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

import { MealPreferenceCustom } from '../../MealPreferenceCustom'
import { MealPreferenceDefault } from '../../MealPreferenceDefault'

import { DatePicker } from '../../../../Common/components/DatePicker'
import { TabBar } from '../../../../Common/components/TabBar'
import FoodPreferenceImage from '../../../../Common/images/foodPreference.png'
import { Button } from '../../../../Common/components/Button'
import { COLORS } from '../../../../Common/theme/Colors'
import strings from '../../../../Common/i18n/strings.json'

interface selectedMealTypeInfo{
   mealItemsInfo:any
}
interface MealPreferenceCardProps {
   selectedMealTypeInfo:selectedMealTypeInfo
}


@observer
class MealPreferenceCard extends Component<MealPreferenceCardProps & RouterProps>{
   mealType
   isCustom
   requestObject
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
   getRequestObject = (mealItemsList, formate) => {
      let requestObject:any = {
         user_meal_format: formate,
         meal_preferences: []
      }
      mealItemsList.forEach(list => {
         requestObject.meal_preferences.push({
            item_id: list.id,
            name: list.name,
            catageory: list.catageory,
            unit: list.unit,
            quantity: list.quantity
         })
      })
      return requestObject
   }
   onClickSave = () => {
      this.isCustom = this.mealFormate.match('custom') ? true : false
      const { mealItemsInfo} = {
         ...this.props.selectedMealTypeInfo
      }
      if (!this.isCustom) {
         this.requestObject = { user_meal_format: this.mealFormate }
      } else {
         this.requestObject = this.getRequestObject(mealItemsInfo[2], 'custom')
      }
      this.onClick()
      const { updateMealInfo } = this.props.selectedMealTypeInfo
      updateMealInfo(this.requestObject, this.isCustom)
   }
   onClickSkipped = () => {
      this.isCustom = true
      const { mealItemsInfo } = {
         ...this.props.selectedMealTypeInfo
      }
      let skippedMealData = mealItemsInfo[2].map(itemInfo =>
         Object.assign({}, itemInfo, { quantity: 0 })
      )
      this.requestObject = this.getRequestObject(skippedMealData, 'skipped')
      this.onClick()
      const { updateMealInfo } = this.props.selectedMealTypeInfo
      updateMealInfo(this.requestObject, this.isCustom)
   }
   capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) => {
      return [first.toLocaleUpperCase(locale), ...rest].join('')
   }
   render() {
      const { skipMeal, back, save } = strings.foodManagement
      const { mealType, mealItemsInfo, date } = {
         ...this.props.selectedMealTypeInfo
      }
      const { onChangeDate } = this.props.selectedMealTypeInfo
      const queryString = require('query-string')
      const parsed = queryString.parse(this.props.location.search)
      return (
         <Layout>
            <Header>
               <Title>{this.capitalizeFirstLetter(parsed.meal_type)}</Title>
               <Button
                  variant={COLORS.white}
                  onClick={this.onClickSkipped}
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
                  variant={COLORS.jade}
                  onClick={this.onClickSave}
                  width={'71px'}
                  name={save}
                  color={COLORS.white}
               />
            </Footer>
         </Layout>
      )
   }
}

export default withRouter(MealPreferenceCard)
