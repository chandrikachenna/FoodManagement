import React from 'react';
import {MainPageContainer,SignupForm} from './styledComponent';
import './signupPage.css';
import {Typo32DarkBlueGreyRubikRegular,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typo';
import strings from '../../../Common/i18n/strings.json';
import {InputFormElementWithLabel} from '../../../Common/components/InputFormElementWithLabel';
import {Logo} from '../../../Common/components/Logo';
import {Button} from '../../../Common/components/Button';

class SignupPage extends React.Component{
    onClick=()=>{

    }
    render(){
        const {signUpTitle,username,password,confirmPassword,signup,haveAnAccount}=strings.signUpPage
        return(
                <MainPageContainer>
                    <SignupForm>
                        <Logo />
                        <Typo32DarkBlueGreyRubikRegular>
                            {signUpTitle}
                        </Typo32DarkBlueGreyRubikRegular>
                        <InputFormElementWithLabel label={username}/>
                        <InputFormElementWithLabel label={password}/>
                        <InputFormElementWithLabel label={confirmPassword}/>
                        <Button onClick={this.onClick} buttonName={signup}
                            className={'signupButtonStyling'}
                        />
                        <Typo14DarkBlueGreyHKGroteskRegular>
                            {haveAnAccount}
                        </Typo14DarkBlueGreyHKGroteskRegular>
                    </SignupForm>
                </MainPageContainer>
            );
    } 
}

export {SignupPage}