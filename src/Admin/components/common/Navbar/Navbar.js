import React, { Component } from 'react'
import {
   Navbarcontainer,
   SubNav,
   OptionsBar,
   Div,
   SpareOptionsBar,
   Link
} from './styledComponents'
import { Logo } from '../../../../Common/components/Logo'
import strings from '../../../../Common/i18n/strings.json'
import {COLORS} from '../../../../Common/theme/Colors';

class Navbar extends Component {
   render() {
      const { onClickGoHome, onClickForRatingsAndReviews,onClickForFoodItems, onClickSignOut,page } = this.props
      const { home, foodItems,ratingsAndReviews,logOut} = strings.admin
      return (
         <>
            <Navbarcontainer>
               <Div>
                  <SubNav>
                     <Logo />
                     <Link color={page.match(home)&&COLORS.brightBlue} onClick={onClickGoHome}>{home}</Link>
                  </SubNav>
                  <OptionsBar>
                     <Link onClick={onClickSignOut}>{logOut}</Link>
                     <Link onClick={onClickForRatingsAndReviews}>{ratingsAndReviews}</Link>
                     <Link onClick={onClickForFoodItems}>{foodItems}</Link>
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <Link onClick={onClickSignOut}>{logOut}</Link>
               <Link onClick={onClickForRatingsAndReviews}>{ratingsAndReviews}</Link>
               <Link onClick={onClickForFoodItems}>{foodItems}</Link>
            </SpareOptionsBar>
         </>
      )
   }
}

export { Navbar }
