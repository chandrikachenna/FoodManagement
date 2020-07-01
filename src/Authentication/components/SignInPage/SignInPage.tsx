import React, { Component } from 'react'

import {
   MainPageContainer,
   SignInForm,
   Title,
   MsgShowField,
   TitleField
} from './styledComponents'
import { API_FETCHING, APIStatus } from '@ib/api-constants'

import { InputElementWithLabel } from '../common/InputElementWithLabel'
import { Footer, Link } from '../common/styledComponents'

import strings from '../../../Common/i18n/strings.json'
import { Logo } from '../../../Common/components/Logo'
import { Button } from '../../../Common/components/Button'
import { COLORS } from '../../../Common/theme/Colors'
const width = '320px'

interface SignInPageProps {
   username: string
   password: string
   errorMessage: string
   usernameErrorMessage: string
   passwordErrorMessage: string
   loginStatus: APIStatus
   onChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void
   onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void
   onClickSignIn: () => void
}

class SignInPage extends Component<SignInPageProps> {
   userNameRef: React.RefObject<HTMLInputElement>
   pwdRef: React.RefObject<HTMLInputElement>
   constructor(props) {
      super(props)
      this.userNameRef = React.createRef()
      this.pwdRef = React.createRef()
   }
   componentDidMount() {
      console.log(this.userNameRef)

      this.userNameRef.current?.focus()
   }
   render() {
      const {
         username: userName,
         password: pwd,
         onChangeUsername,
         onChangePassword,
         onClickSignIn,
         errorMessage,
         loginStatus,
         usernameErrorMessage,
         passwordErrorMessage
      } = this.props
      const {
         signInText,
         typeText,
         typeButton,
         usernamePlaceholder,
         passwordPlaceholder,
         typePassword,
         signInTitle,
         username,
         password,
         signIn,
         haveAnAccount,
         signUplink,
         signInButtonTestId
      } = strings.authentication
      return (
         <MainPageContainer>
            <SignInForm>
               <Logo />
               <TitleField>
                  <Title>{signInTitle}</Title>
               </TitleField>
               <InputElementWithLabel
                  forwardRef={this.userNameRef}
                  label={username}
                  type={typeText}
                  placeholder={usernamePlaceholder}
                  value={userName}
                  onChange={onChangeUsername}
                  message={usernameErrorMessage}
               />
               <InputElementWithLabel
                  forwardRef={this.pwdRef}
                  label={password}
                  type={typePassword}
                  placeholder={passwordPlaceholder}
                  value={pwd}
                  onChange={onChangePassword}
                  message={passwordErrorMessage}
               />
               <Button
                  onClick={onClickSignIn}
                  name={signIn}
                  width={width}
                  variant={COLORS.brightBlue}
                  type={typeButton}
                  text={signInText}
                  loadingStatus={loginStatus}
                  disabled={loginStatus == API_FETCHING ? true : false}
                  data-testid={signInButtonTestId}
               />

               <MsgShowField>
                  {errorMessage && loginStatus !== API_FETCHING && errorMessage}
               </MsgShowField>
               <Footer>
                  {haveAnAccount}
                  <Link>{` ${signUplink}`}</Link>
               </Footer>
            </SignInForm>
         </MainPageContainer>
      )
   }
}

export { SignInPage }
