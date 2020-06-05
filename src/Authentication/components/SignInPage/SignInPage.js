import React, { Component } from 'react'

import {
   MainPageContainer,
   SignInForm,
   Title,
   MsgShowField
} from './styledComponents'

import { InputElementWithLabel } from '../common/InputElementWithLabel'
import { Footer, Link, ButtonTextLabel } from '../common/styledComponents'

import strings from '../../../Common/i18n/strings.json'
import { Logo } from '../../../Common/components/Logo'
import { Button } from '../../../Common/components/Button'
import { COLORS } from '../../../Common/theme/Colors'

class SignInPage extends Component {
   render() {
      const {
         username: userName,
         password: pwd,
         onChangeUsername,
         onChangePassword,
         onClickSignIn,
         errorMessage,
         loginStatus
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
         ButtonClassName,
         signIn,
         haveAnAccount,
         signUplink,
         signInButtonTestId
      } = strings.authentication
      return (
         <MainPageContainer>
            <SignInForm>
               <Logo />
               <Title>{signInTitle}</Title>
               <InputElementWithLabel
                  label={username}
                  type={typeText}
                  placeholder={usernamePlaceholder}
                  value={userName}
                  onChange={onChangeUsername}
               />
               <InputElementWithLabel
                  label={password}
                  type={typePassword}
                  placeholder={passwordPlaceholder}
                  value={pwd}
                  onChange={onChangePassword}
               />
               <Button
                  onClick={onClickSignIn}
                  name={signIn}
                  width={'320px'}
                  variant={COLORS.brightBlue}
                  type={typeButton}
                  text={signInText}
                  loadingStatus={loginStatus}
                  disabled={loginStatus == 100 ? true : false}
                  data-testid={signInButtonTestId}
               />

               <MsgShowField>{errorMessage && errorMessage}</MsgShowField>
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
