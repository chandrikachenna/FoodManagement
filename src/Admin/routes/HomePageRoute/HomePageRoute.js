import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HomePage } from '../../components/HomePage'
import { observer, inject } from 'mobx-react'
import {withHeader} from '../../../Common/hocs/withHeader';

@inject( 'scheduleMealStore')
@observer
class HomePageRoute extends Component {
   render() {
      return (
         <HomePage
            onClickGoHome={this.onClickGoHome}
            onClickSignOut={this.onClickSignOut}
            onClickScheduleMeal={this.onClickScheduleMeal}
         />
      )
   }
}

export default withRouter(withHeader(HomePageRoute))
