import React from 'react';
import {MainPageContainer,SignupForm} from './styledComponent';
import './signupPage.css';
import {Typo32DarkBlueGreyRubikRegular,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typo';
import strings from '../../../Common/i18n/strings.json';
import {Logo} from '../../../Common/components/Logo';
import {Button} from '../../../Common/components/Button';
import {InputElementWithLabel} from '../../common/InputElementWithLabel';

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
                        <InputElementWithLabel label={username}/>
                        <InputElementWithLabel label={password}/>
                        <InputElementWithLabel label={confirmPassword}/>
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