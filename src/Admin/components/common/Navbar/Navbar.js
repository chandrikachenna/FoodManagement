import React, { Component } from 'react'
import {
   Navbarcontainer,
   SubNav,
   OptionsBar,
   Div,
   SpareOptionsBar,
   PageLink
} from './styledComponents'
import { Logo } from '../../../../Common/components/Logo'
import strings from '../../../../Common/i18n/strings.json'
import { COLORS } from '../../../../Common/theme/Colors'

class Navbar extends Component {
   render() {
      const {
         onClickGoHome,
         onClickForRatingsAndReviews,
         onClickForFoodItems,
         onClickSignOut,
         page
      } = this.props
      const { home, foodItems, ratingsAndReviews, logOut } = strings.admin
      return (
         <>
            <Navbarcontainer>
               <Div>
                  <SubNav>
                     <Logo />
                     <PageLink
                        color={page.match(home) && COLORS.brightBlue}
                        onClick={onClickGoHome}
                     >
                        {home}
                     </PageLink>
                  </SubNav>
                  <OptionsBar>
                     <PageLink
                        color={page.match(logOut) && COLORS.brightBlue}
                        onClick={onClickSignOut}
                     >
                        {logOut}
                     </PageLink>
                     <PageLink
                        color={
                           page.match(ratingsAndReviews) && COLORS.brightBlue
                        }
                        onClick={onClickForRatingsAndReviews}
                     >
                        {ratingsAndReviews}
                     </PageLink>
                     <PageLink
                        color={page.match(foodItems) && COLORS.brightBlue}
                        onClick={onClickForFoodItems}
                     >
                        {foodItems}
                     </PageLink>
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <PageLink
                  color={page.match(logOut) && COLORS.brightBlue}
                  onClick={onClickSignOut}
               >
                  {logOut}
               </PageLink>
               <PageLink
                  color={page.match(ratingsAndReviews) && COLORS.brightBlue}
                  onClick={onClickForRatingsAndReviews}
               >
                  {ratingsAndReviews}
               </PageLink>
               <PageLink
                  color={page.match(foodItems) && COLORS.brightBlue}
                  onClick={onClickForFoodItems}
               >
                  {foodItems}
               </PageLink>
            </SpareOptionsBar>
         </>
      )
   }
}

export { Navbar }
