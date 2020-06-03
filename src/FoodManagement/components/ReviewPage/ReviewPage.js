import React, { Component } from 'react'
import { HomePageContainer } from './styledComponents'
import { Navbar } from '../../common/Navbar'
import { ReviewCard } from '../ReviewCard'
import { Carousel } from '../../common/Carousel'

class ReviewPage extends Component {
   render() {
      const { onClickSignOut, onClickGoHome } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <Carousel />
            <ReviewCard />
         </HomePageContainer>
      )
   }
}

export { ReviewPage }
