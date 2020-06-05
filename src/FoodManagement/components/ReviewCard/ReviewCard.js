import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
   Layout,
   Title,
   SubTitle,
   Header,
   Review,
   Item,
   InfoContainer
} from './styledComponents'
import { StarRating } from '../../common/StarRating'
import { Button } from '../../../Common/components/Button'
import strings from '../../../Common/i18n/strings.json'
import { COLORS } from '../../../Common/theme/Colors'
import { TextArea } from '../../../Common/components/TextArea'
import { observer } from "mobx-react"
const width='73px';

@observer
class ReviewCard extends Component {
   
   requestedObject=()=>{
      const reviewInfo=this.props.mealInfoStore.selectedMealTypeReview
      const object={
         items:[]}
         reviewInfo.mealReviewInfo.forEach((item)=>
                       object.items.push({
                        item_name:item.name,
                        quality_rating:item.qualityRating,
                        taste_rating:item.tasteRating
                       })
                     )
   }
   onClick = () => {
      const { history } = this.props
      history.push('/food-management/home');
      const reviewInfo=this.props.mealInfoStore.selectedMealTypeReview
      reviewInfo.onSave()    //TODO --date,mealType from params
   }
   render() {
      const { done } = strings.foodManagement
      const reviewInfo=this.props.mealInfoStore.selectedMealTypeReview
      
      return (
         <Layout>
            <Title>Review</Title>
            <Header>
               <SubTitle>Quality</SubTitle>
               <SubTitle>Quantity</SubTitle>
            </Header>
            <Review>
               <InfoContainer>
                  {
                     reviewInfo.mealReviewInfo.map((item)=>
                        <Item>{item.name}</Item>
                     )
                  }
               </InfoContainer>
               <InfoContainer>
                  {
                     reviewInfo.mealReviewInfo.map((item)=>
                        <StarRating onChange={item.onChangeQualityRating} />
                     )
                  }
               </InfoContainer>
               <InfoContainer>
                  {
                     reviewInfo.mealReviewInfo.map((item)=>
                        <StarRating onChange={item.onChangeTasteRating} />
                     )
                  }
               </InfoContainer>
            </Review>
            <TextArea />
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
