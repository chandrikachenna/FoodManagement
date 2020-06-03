import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { MealSchedulePage } from '../../components/MealSchedulePage'
import { observer, inject } from 'mobx-react'

@inject('authStore', 'scheduleMealStore')
@observer
class MealScheduleRoute extends Component {
   componentDidMount = () => {
      this.props.scheduleMealStore.getScheduleMealInfo()
   }
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
         <MealSchedulePage
            onClickGoHome={this.onClickGoHome}
            onClickSignOut={this.onClickSignOut}
         />
      )
   }
}

export default withRouter(MealScheduleRoute)
