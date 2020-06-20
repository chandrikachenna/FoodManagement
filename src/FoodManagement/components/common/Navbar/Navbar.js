import React, { Component } from 'react'
import {
   Navbarcontainer,
   SubNav,
   OptionsBar,
   Div,
   SpareOptionsBar,
   Link,
   Text
} from './styledComponents'
import { Logo } from '../../../../Common/components/Logo'
import strings from '../../../../Common/i18n/strings.json'

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
                     <Link onClick={onClickGoHome}>
                        <Text>{home}</Text>
                     </Link>
                  </SubNav>
                  <OptionsBar>
                     <Link onClick={onClickSignOut}>
                        <Text>{'Logout'}</Text>
                     </Link>
                     <Link onClick={onClickForProfile}>
                        <Text>{profile}</Text>
                     </Link>
                     <Link onClick={onClickGoWeeklyMenu}>
                        <Text>{weeklyMenu}</Text>
                     </Link>
                  </OptionsBar>
               </Div>
            </Navbarcontainer>
            <SpareOptionsBar>
               <Link onClick={onClickSignOut}>
                  <Text>{'Logout'}</Text>
               </Link>
               <Link onClick={onClickGoWeeklyMenu}>
                  <Text>{weeklyMenu}</Text>
               </Link>
            </SpareOptionsBar>
         </>
      )
   }
}

export { Navbar }
