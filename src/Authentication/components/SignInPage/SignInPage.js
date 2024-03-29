import React, { Component } from 'react'

import {
   MainPageContainer,
   SignInForm,
   Title,
   MsgShowField,
   TitleField
} from './styledComponents'
import { API_FETCHING } from '@ib/api-constants'

import { InputElementWithLabel } from '../common/InputElementWithLabel'
import { Footer, Link } from '../common/styledComponents'

import strings from '../../../Common/i18n/strings.json'
import { Logo } from '../../../Common/components/Logo'
import { Button } from '../../../Common/components/Button'
import { COLORS } from '../../../Common/theme/Colors'
const width = '320px'

class SignInPage extends Component {
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
                  label={username}
                  type={typeText}
                  placeholder={usernamePlaceholder}
                  value={userName}
                  onChange={onChangeUsername}
                  message={usernameErrorMessage}
               />
               <InputElementWithLabel
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
