import React, { Component } from 'react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react'
import {
   Layout,
   Title,
   SubTitle,
   Header,
   Review,
   Item,
   InfoContainer
} from './styledComponents'
import { StarRating } from '../common/StarRating'
import { Button } from '../../../Common/components/Button'
import strings from '../../../Common/i18n/strings.json'
import { COLORS } from '../../../Common/theme/Colors'
import { TextArea } from '../../../Common/components/TextArea'
import { SMART_FOOD_MANAGEMENT_PATH } from '../../constants/RouteConstants'
import { observable } from 'mobx'
import { MealInfoStore } from "../../stores/MealInfoStore"

const width:string = '73px'

interface ReviewCardProps extends RouteComponentProps{
   mealInfoStore:MealInfoStore,
}

@observer
class ReviewCard extends Component<ReviewCardProps> {
   @observable reviewText
   requestedObject = () => {
      const reviewInfo = this.props.mealInfoStore.selectedMealTypeReview
      const object:any = {
         user_reveiw: reviewInfo.reviewText,
         items: []
      }
      reviewInfo.mealReviewInfo.forEach(item =>
         object.items.push({
            item_name: item.name,
            quality_rating: item.qualityRating,
            taste_rating: item.tasteRating
         })
      )
      return object
   }
   onClick = () => {
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_PATH)
      const reviewInfo = this.props.mealInfoStore.selectedMealTypeReview
      this.requestedObject()
      reviewInfo.setMealReviewInfo() //TODO --date,mealType from params
   }
   onChangeReview = event => {
      const reviewInfo = this.props.mealInfoStore.selectedMealTypeReview
      this.reviewText = event.target.value
      reviewInfo.reviewText = this.reviewText
   }
   render() {
      const { done } = strings.foodManagement
      const reviewInfo = this.props.mealInfoStore.selectedMealTypeReview
      return (
         <Layout>
            <Title>Review</Title>
            <Header>
               <SubTitle>Quality</SubTitle>
               <SubTitle>Quantity</SubTitle>
            </Header>
            <Review>
               <InfoContainer>
                  {reviewInfo.mealReviewInfo.map(item => (
                     <Item>{item.name}</Item>
                  ))}
               </InfoContainer>
               <InfoContainer>
                  {reviewInfo.mealReviewInfo.map(item => (
                     <StarRating onChange={item.onChangeQualityRating} />
                  ))}
               </InfoContainer>
               <InfoContainer>
                  {reviewInfo.mealReviewInfo.map(item => (
                     <StarRating onChange={item.onChangeTasteRating} />
                  ))}
               </InfoContainer>
            </Review>
            <TextArea
               onChange={reviewInfo.onChangeReview}
               value={this.reviewText}
            />
            <Button
               name={done}
               variant={COLORS.jade}
               width={width}
               onClick={this.onClick}
            />
         </Layout>
      )
   }
}

export default withRouter(ReviewCard)
