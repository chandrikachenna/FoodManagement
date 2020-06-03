import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ReviewPage } from '../../components/ReviewPage'
import { observer, inject } from 'mobx-react'

@inject('authStore')
@observer
class ReviewPageRoute extends Component {
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
         <ReviewPage
            onClickGoHome={this.onClickGoHome}
            onClickSignOut={this.onClickSignOut}
         />
      )
   }
}

export default withRouter(ReviewPageRoute)
