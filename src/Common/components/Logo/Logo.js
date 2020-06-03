import React, { Component } from 'react'
import { IBHUBSLogo } from './styledComponents'
import iB_HUBS_LOGO from '../../images/ibHubsLogo.svg'
class Logo extends Component {
   render() {
      return <IBHUBSLogo src={iB_HUBS_LOGO} />
   }
}

export { Logo }
