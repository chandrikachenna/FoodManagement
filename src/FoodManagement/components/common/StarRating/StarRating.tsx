import React, { Component } from 'react'
import ReactStarRating from 'react-star-rating-component'
import StartIcon from '../../../../Common/icons/star.svg'
import { observer } from 'mobx-react'
interface IState {
   rating: number;
 }
interface StarRatingProps{
   onChange:(props:number)=>void
}
@observer
class StarRating extends Component<StarRatingProps,IState> {
   constructor(props) {
      super(props)
      this.state = {
         rating: 1
      }
   }
   onStarClick(nextValue, prevValue, name) {
      this.setState({ rating: nextValue })
      this.props.onChange(nextValue)
   }

   render() {
      const { rating} = this.state
      return (
         <ReactStarRating
            name='rate1'
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
         />
      )
   }
}

export { StarRating }
