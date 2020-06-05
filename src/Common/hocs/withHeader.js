import React from 'react'
import { observer, inject } from 'mobx-react'

export function withHeader(WrappedComponent) {
   @inject('authStore')
   @observer
   class EnhancedComponent extends React.Component {
      onClickSignOut = () => {
         this.props.authStore.userSignOut()
         const { history } = this.props
         history.replace({ pathname: 'sign-in' })
      }
      onClickGoHome = () => {
         const { history } = this.props
         history.push('/food-management/home')
      }
      render() {
         return (
            <WrappedComponent
               onClickGoHome={this.onClickGoHome}
               onClickSignOut={this.onClickSignOut}
               {...this.props}
            />
         )
      }
   }
   return EnhancedComponent
}
