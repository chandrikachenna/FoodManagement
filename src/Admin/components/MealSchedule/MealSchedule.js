import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import {
   Layout,
   Header,
   Footer,
   InfoBox,
   Items,
   Title,
   SelectionField,
   Wrap,
   ItemsBox,
   AlignButton
} from './styledComponents'

import { DatePicker } from '../../../Common/components/DatePicker'
import { TabBar } from '../../../Common/components/TabBar'
import { Button } from '../../../Common/components/Button'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings.json'

import { MealItem } from '../../common/MealItem'

@observer
class MealSchedule extends Component {
   @observable mealType = 'breakfast'
   onClick = () => {
      const { history } = this.props
      history.push('/food-management/admin/home')
   }
   onClickBreakfast = () => {
      this.mealType = 'breakfast'
   }
   onClickLunch = () => {
      this.mealType = 'lunch'
   }
   onClickDinner = () => {
      this.mealType = 'dinner'
   }
   render() {
      const { back, save } = strings.foodManagement
      const { scheduleMeal, addAnItem } = strings.admin

      return (
         <Layout>
            <Header>
               <Title>{scheduleMeal}</Title>
            </Header>
            <SelectionField>
               <TabBar
                  onClikFullMeal={this.onClickBreakfast}
                  onClikHalfMeal={this.onClickLunch}
                  onClikCustom={this.onClickDinner}
               />
               <DatePicker />
            </SelectionField>
            <InfoBox>
               <ItemsBox>
                  <Items>
                     <MealItem />
                     <MealItem />
                  </Items>
                  <Items>
                     <MealItem />
                     <MealItem />
                  </Items>
               </ItemsBox>
               <AlignButton>
                  <Button
                     variant={COLORS.jade}
                     onClick={this.onClick}
                     width={'107px'}
                     name={addAnItem}
                     color={COLORS.white}
                  />
               </AlignButton>
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
                  onClick={this.onClick}
                  width={'71px'}
                  name={save}
                  color={COLORS.white}
               />
            </Footer>
         </Layout>
      )
   }
}

export default withRouter(MealSchedule)
