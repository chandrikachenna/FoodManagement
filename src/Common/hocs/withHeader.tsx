import React from 'react'
import { observer, inject } from 'mobx-react'
import { AuthStore } from "../../Authentication/stores/AuthStore"
import {History} from 'history'

interface EnhancedComponentProps{
   authStore:AuthStore,
   history:History
}

export function withHeader(WrappedComponent) {
   @inject('authStore')
   @observer
   class EnhancedComponent extends React.Component<EnhancedComponentProps>{
      onClickSignOut = () => {
         this.props.authStore.userSignOut()
         const { history } = this.props
         history.replace({ pathname: 'sign-in' })
      }
      onClickGoHome = () => {
         const { history } = this.props
         history.replace('/food-management/home')
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
