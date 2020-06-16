import React from 'react'
import { MainPageContainer, SignupForm, Title } from './styledComponent'
import { Footer, Link, ButtonTextLabel } from '../common/styledComponents'
import strings from '../../../Common/i18n/strings.json'
import { Logo } from '../../../Common/components/Logo'
import { Button } from '../../../Common/components/Button'
import { InputElementWithLabel } from '../common/InputElementWithLabel'
const width = '320px'

class SignupPage extends React.Component {
   onClick = () => {}
   render() {
      const {
         signUpTitle,
         username,
         password,
         confirmPassword,
         signup,
         haveAnAccount,
         login
      } = strings.authentication
      return (
         <MainPageContainer>
            <SignupForm>
               <Logo />
               <Title>{signUpTitle}</Title>
               <InputElementWithLabel label={username} />
               <InputElementWithLabel label={password} />
               <InputElementWithLabel label={confirmPassword} />
               <Button
                  onClick={this.onClick}
                  name={signup}
                  width={width}
                  variant={COLORS.brightBlue}
                  type={typeButton}
                  text={signInText}
                  disabled={loginStatus == 100 ? true : false}
                  data-testid={signInButtonTestId}
               />
               <Footer>
                  {haveAnAccount}
                  <Link>{` ${login}`}</Link>
               </Footer>
            </SignupForm>
         </MainPageContainer>
      )
   }
}

export { SignupPage }
