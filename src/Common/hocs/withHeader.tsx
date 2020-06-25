import React from 'react'
import { observer, inject } from 'mobx-react'
import { AuthStore } from "../../Authentication/stores/AuthStore"
import { RouteComponentProps } from "react-router-dom"

interface EnhancedComponentProps extends RouteComponentProps{
   
}
interface InjectedProps extends EnhancedComponentProps{
   authStore:AuthStore
}

export function withHeader(WrappedComponent) {
   @inject('authStore')
   @observer
   class EnhancedComponent extends React.Component<EnhancedComponentProps>{
      onClickSignOut = () => {
         this.getInjectedProps().authStore.userSignOut()
         const { history } = this.props
         history.replace({ pathname: 'sign-in' })
      }
      getInjectedProps=():InjectedProps=>this.props as InjectedProps
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
