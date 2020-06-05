import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ReviewPage } from '../../components/ReviewPage'
import { observer, inject } from 'mobx-react'
import { withHeader } from '../../../Common/hocs/withHeader'

@observer
class ReviewPageRoute extends Component {
   render() {
      return (
         <ReviewPage
            onClickGoHome={this.props.onClickGoHome}
            onClickSignOut={this.props.onClickSignOut}
         />
      )
   }
}

export default withRouter(withHeader(ReviewPageRoute))
