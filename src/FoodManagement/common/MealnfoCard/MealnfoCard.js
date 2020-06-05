import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {
   CardLayout,
   Header,
   TitleBox,
   FoodType,
   FoodTimigs,
   FoodItemsContainer,
   Left,
   Right,
   FoodItem,
   Label,
   Review
} from './styledComponents'

import { Button } from '../../../Common/components/Button'
import { IconHolder } from '../../../Common/components/IconHolder'
import { Menubar } from '../../../Common/components/Menubar'
import { TextLabel } from '../../../Common/components/TextLabel'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings.json'
import { observable } from 'mobx'
import {
   formatDistance,
   formatDistanceToNow,
   compareAsc,
   format
} from 'date-fns'

class MealInfoCard extends Component {
   onClick = () => {
      const { history } = this.props
      const { onClickEdit } = this.props.mealInfoStore
      onClickEdit(this.props.info.meal_type)
      const { timeCounter } = this.props.mealInfoStore
      history.push(`/food-management/set-meal-preference`)
      const date = format(new Date(timeCounter), 'yyyy-MM-dd')
      // history.push({
      //    pathname:`/food-management/set-meal-preference?date=${date}&meal_type=${this.props.info.meal_type}`,
      //  });
   }
   goForReview = () => {
      const { history } = this.props
      history.push('/food-management/meal-feedback')
   }
   render() {
      const { typeButton } = strings.authentication
      const { editPreference } = strings.foodManagement
      const {
         meal_type,
         meal_items,
         meal_format,
         open_time,
         close_time,
         meal_icon,
         edit_preference_dead_line
      } = this.props.info
     
      const { timeCounter } = this.props.mealInfoStore

      let leftTime
      const difference = compareAsc(
         new Date(edit_preference_dead_line),
         new Date(timeCounter)
      )
      if (difference === 1) {
         leftTime = formatDistance(
            new Date(edit_preference_dead_line),
            new Date(timeCounter),
            { addSuffix: true }
         )
      }
      
      return (
         <CardLayout>
            <Header>
               <IconHolder svg={meal_icon} />
               <TitleBox>
                  <FoodType>{meal_type}</FoodType>
                  <FoodTimigs>
                     {open_time}
                     {` - ${close_time}`}
                  </FoodTimigs>
               </TitleBox>
               <Label>
                  <Menubar />
                  <TextLabel text={meal_format} />
               </Label>
            </Header>
            <FoodItemsContainer>
               <Left>
                  {meal_items.map(
                     (item, index) =>
                        index < 3 && (
                           <FoodItem key={Math.random().toString()}>
                              {item.meal_item}
                           </FoodItem>
                        )
                  )}
               </Left>
               <Right>
                  {meal_items.map(
                     (item, index) =>
                        index >= 3 && (
                           <FoodItem key={Math.random().toString()}>
                              {item.meal_item}
                           </FoodItem>
                        )
                  )}
               </Right>
            </FoodItemsContainer>
            {difference === 1 ? (
               <Button
                  onClick={this.onClick}
                  name={editPreference.concat(
                     ` ${leftTime
                        .split(' ')
                        .splice(-2)
                        .join(' ')} Left`
                  )}
                  width={'314px'}
                  variant={COLORS.brightBlue}
                  type={typeButton}
                  text={editPreference}
               />
            ) : (
               <Review>
                  <Button
                     onClick={this.goForReview}
                     name={'I Ate it'}
                     width={'128px'}
                     variant={COLORS.brightBlue}
                     type={typeButton}
                     text={editPreference}
                  />
                  <Button
                     onClick={this.goForReview}
                     name={'I Skipped'}
                     width={'128px'}
                     variant={COLORS.white}
                     type={typeButton}
                     text={editPreference}
                     color={COLORS.black}
                  />
               </Review>
            )}
         </CardLayout>
      )
   }
}

export default withRouter(MealInfoCard)
