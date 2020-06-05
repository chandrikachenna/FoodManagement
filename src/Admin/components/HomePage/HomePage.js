import React, { Component } from 'react'
import {
   HomePageContainer,Body
   
} from './styledComponents'
import { Navbar } from '../common/Navbar'
import strings from '../../../Common/i18n/strings.json'
import {TabBar} from '../common/TabBar';
import {MenuBar} from '../common/MenuBar';
import {MenuDisplayer} from '../common/MenuDisplayer';
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
            <Body>
               <TabBar/>
               <MenuDisplayer menu={'Menu2'} menu1Name={'one'} menu2Name={'two'} menu3Name={'three'} />
            </Body>
         </HomePageContainer>
      )
   }
}

export { HomePage }
