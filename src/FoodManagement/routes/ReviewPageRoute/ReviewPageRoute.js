import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ReviewPage } from '../../components/ReviewPage'
class ReviewPageRoute extends Component {
   render() {
      return <ReviewPage />
   }
}

export default withRouter(ReviewPageRoute)
