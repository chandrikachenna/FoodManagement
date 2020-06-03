import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HomePage } from '../../components/HomePage'
import { observer, inject } from 'mobx-react'

@inject('authStore', 'scheduleMealStore')
@observer
class HomePageRoute extends Component {
   onClickSignOut = () => {
      this.props.authStore.userSignOut()
      const { history } = this.props
      history.push('/food-management/sign-in')
   }
   onClickGoHome = () => {
      const { history } = this.props
      history.push('/food-management/admin/home')
   }
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

export default withRouter(HomePageRoute)
