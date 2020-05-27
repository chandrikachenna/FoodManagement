import React from 'react';
import {MainPageContainer,SignupForm,Title} from './styledComponent';
import './signupPage.css';
import {Footer,Link,ButtonTextLabel} from '../../common/styledComponents';
import strings from '../../../Common/i18n/strings.json';
import {Logo} from '../../../Common/components/Logo';
import {Button} from '../../../Common/components/Button';
import {InputElementWithLabel} from '../../common/InputElementWithLabel';

class SignupPage extends React.Component{
    onClick=()=>{

    }
    render(){
        const {signUpTitle,username,password,confirmPassword,signup,haveAnAccount,login}=strings.authentication
        return(
                <MainPageContainer>
                    <SignupForm>
                        <Logo />
                        <Title>{signUpTitle}</Title>
                        <InputElementWithLabel label={username}/>
                        <InputElementWithLabel label={password}/>
                        <InputElementWithLabel label={confirmPassword}/>
                        <Button onClick={this.onClick} buttonName={signup}
                            className={'signupButtonStyling'} textLabel={ButtonTextLabel}
                        />
                        <Footer>{haveAnAccount}
                            <Link>{` ${login}`}</Link>
                        </Footer>
                    </SignupForm>
                </MainPageContainer>
            );
    } 
}

export {SignupPage}