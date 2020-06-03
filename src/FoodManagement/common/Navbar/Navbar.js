import React, { Component } from 'react'
import {
   Navbarcontainer,
   SubNav,
   OptionsBar,
   Div,
   SpareOptionsBar,
   Link
} from './styledComponents'
import { Logo } from '../../../Common/components/Logo'
import strings from '../../../Common/i18n/strings.json'

class Navbar extends Component {
   render() {
      const {
         onClickGoHome,
         onClickGoWeeklyMenu,
         onClickForProfile,
         onClickSignOut
      } = this.props
      const { home, profile, weeklyMenu } = strings.foodManagement
      return (
         <>
            <Navbarcontainer>
               <Div>
                  <SubNav>
                     <Logo />
                     <Link onClick={onClickGoHome}>{home}</Link>
                  </SubNav>
                  <OptionsBar>
                     <Link onClick={onClickSignOut}>{'Logout'}</Link>
                     <Link onClick={onClickForProfile}>{profile}</Link>
                     <Link onClick={onClickGoWeeklyMenu}>{weeklyMenu}</Link>
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <Link onClick={onClickForProfile}>{profile}</Link>
               <Link onClick={onClickGoWeeklyMenu}>{weeklyMenu}</Link>
            </SpareOptionsBar>
         </>
      )
   }
}

export { Navbar }
