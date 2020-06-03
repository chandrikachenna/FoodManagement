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
      const { onClickGoHome, onClickForProfile, onClickSignOut } = this.props
      const { home, profile } = strings.foodManagement
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
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <Link onClick={onClickSignOut}>{'Logout'}</Link>
               <Link onClick={onClickForProfile}>{profile}</Link>
            </SpareOptionsBar>
         </>
      )
   }
}

export { Navbar }
