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
   static defaultProps={
      onClickForRatingsAndReviews:null,
      onClickForFoodItems:null
   }
   render() {
      const {
         onClickGoHome,
         onClickForRatingsAndReviews,
         onClickForFoodItems,
         onClickSignOut,
         page
      } = this.props
      const { home, foodItems, ratingsAndReviews, logOut } = strings.admin
      //TODO color --page.match(foodItems) && COLORS.brightBlue
      return (
         <>
            <Navbarcontainer>
               <Div>
                  <SubNav>
                     <Logo />
                     <Button onClick={onClickGoHome}>
                        <PageLink color={'blue'}>
                           {home}
                        </PageLink>
                     </Button>
                  </SubNav>
                  <OptionsBar>
                     <Button onClick={onClickSignOut}>
                        <PageLink
                           color={'black'}
                        >
                           {logOut}
                        </PageLink>
                     </Button>
                     <PageLink
                        color={
                           'black'
                        }
                        onClick={onClickForRatingsAndReviews}
                     >
                        {ratingsAndReviews}
                     </PageLink>
                     <PageLink
                        color={'black'}
                        onClick={onClickForFoodItems}
                     >
                        {foodItems}
                     </PageLink>
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <Button onClick={onClickSignOut}>
                  <PageLink color={'black'}>
                     {logOut}
                  </PageLink>
               </Button>
               <PageLink
                  color={'black'}
                  onClick={onClickForRatingsAndReviews}
               >
                  {ratingsAndReviews}
               </PageLink>
               <PageLink
                  color={'black'}
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
