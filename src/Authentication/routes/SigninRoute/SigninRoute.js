import React, { Component } from 'react'
import { SignInPage } from '../../components/SignInPage'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'
import strings from '../../../Common/i18n/strings.json'

const {
   enterUsernameMsg,
   enterPasswordMsg,
   networkErrorMsg
} = strings.authentication

@inject('authStore')
@observer
class SigninRoute extends Component {
   @observable username
   @observable password
   @observable usernameErrorMessage
   @observable passwordErrorMessage
   @observable errorMessage
   constructor(props){
      super(props)
      this.username=''
      this.password=''
   }
   onChangeUsername = event => {
      this.username = event.target.value
      if (this.username) this.usernameErrorMessage = ''
   }
   onChangePassword = event => {
      this.password = event.target.value
      if (this.password) this.passwordErrorMessage = ''
   }
   onSuccesSignIn = () => {
      const { history } = this.props
      history.replace('/food-management/home')
   }
   onFailureSignIn = () => {
      const { getUserSignInAPIError: apiError } = this.props.authStore
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
         this.props.authStore.userSignIn(
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
            loginStatus={this.props.authStore.getUserSignInAPIStatus}
            usernameErrorMessage={this.usernameErrorMessage}
            passwordErrorMessage={this.passwordErrorMessage}
            errorMessage={this.errorMessage}
         />
      )
   }
}

export default withRouter(SigninRoute)
