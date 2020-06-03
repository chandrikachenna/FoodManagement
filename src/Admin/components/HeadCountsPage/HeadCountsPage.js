import React, { Component } from 'react'
import { HomePageContainer } from './styledComponents'
import { Navbar } from '../../common/Navbar'

class HeadCountsPage extends Component {
   render() {
      const { onClickSignOut, onClickGoHome } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <p>headCounts</p>
         </HomePageContainer>
      )
   }
}

export { HeadCountsPage }
