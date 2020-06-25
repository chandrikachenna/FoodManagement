import React, { Component } from 'react'
import { SignInPage } from '../../components/SignInPage'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter ,RouteComponentProps} from 'react-router-dom'
import strings from '../../../Common/i18n/strings.json'
import { HOME_PAGE_PATH } from '../../constants/RouteConstants'
import { AuthStore } from "../../stores/AuthStore"

const { enterUsernameMsg, enterPasswordMsg } = strings.authentication

interface SigninRouteProps extends RouteComponentProps{
   
}
interface InjectedProps extends SigninRouteProps{
   authStore:AuthStore
}

@inject('authStore')
@observer
class SigninRoute extends Component <SigninRouteProps>{
   @observable username:string
   @observable password:string
   @observable usernameErrorMessage!:string
   @observable passwordErrorMessage!:string
   @observable errorMessage!:string
   constructor(props) {
      super(props)
      this.username = ''
      this.password = ''
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>):void=> {
      this.username = event.target.value
      if (this.username) {
         this.usernameErrorMessage = ''
         this.passwordErrorMessage = ''
      }
   }
   onChangePassword = event => {
      this.password = event.target.value
      if (this.password) {
         this.usernameErrorMessage = ''
         this.passwordErrorMessage = ''
      }
   }
   onSuccesSignIn = () => {
      const { history } = this.props
      // if(getRole().match('Admin'))
      //    history.replace(ADMIN_PATH)
      // else
      history.replace(HOME_PAGE_PATH)
   }
   onFailureSignIn = () => {
      const { getUserSignInAPIError: apiError } = this.getInjectedProps().authStore
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError
      }
   }
   onClickSignIn = () => {
      if (this.username && this.password) {
         const requestObject = {
            username: this.username,
            password: this.password
         }
         this.getInjectedProps().authStore.userSignIn(
            this.onSuccesSignIn,
            this.onFailureSignIn,
            requestObject
         )
      } else if (!this.username) this.usernameErrorMessage = enterUsernameMsg
      else if (!this.password) this.passwordErrorMessage = enterPasswordMsg
   }
   render() {
      return (
         <SignInPage
            username={this.username}
            password={this.password}
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            loginStatus={this.getInjectedProps().authStore.getUserSignInAPIStatus}
            usernameErrorMessage={this.usernameErrorMessage}
            passwordErrorMessage={this.passwordErrorMessage}
            errorMessage={this.errorMessage}
         />
      )
   }
}

export default withRouter(SigninRoute)
