import React, { Component } from 'react'
import {
   Navbarcontainer,
   SubNav,
   OptionsBar,
   Div,
   SpareOptionsBar,
   PageLink,
   Button
} from './styledComponents'
import { Logo } from '../../../../Common/components/Logo'
import strings from '../../../../Common/i18n/strings.json'
import { COLORS } from '../../../../Common/theme/Colors'

interface NavbarProps{
   onClickGoHome:()=>void
   onClickForRatingsAndReviews:()=>void,
   onClickForFoodItems:()=>void
   onClickSignOut:()=>void
   page:string
}

class Navbar extends Component<NavbarProps> {
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
                     <Button onClick={onClickGoHome}>
                        <PageLink color={page.match(home) && COLORS.brightBlue}>
                           {home}
                        </PageLink>
                     </Button>
                  </SubNav>
                  <OptionsBar>
                     <Button onClick={onClickSignOut}>
                        <PageLink
                           color={page.match(logOut) && COLORS.brightBlue}
                        >
                           {logOut}
                        </PageLink>
                     </Button>
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
               <Button onClick={onClickSignOut}>
                  <PageLink color={page.match(logOut) && COLORS.brightBlue}>
                     {logOut}
                  </PageLink>
               </Button>
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
