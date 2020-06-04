import React, { Component } from 'react'
import {
   HomePageContainer,
   
} from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'

class HomePage extends Component {
   render() {
      const { scheduleMeal, headCount, mealFeedback, foodTrack ,home} = strings.admin
      const { onClickSignOut, onClickGoHome } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
               page={home}
            />
         </HomePageContainer>
      )
   }
}

export { HomePage }
