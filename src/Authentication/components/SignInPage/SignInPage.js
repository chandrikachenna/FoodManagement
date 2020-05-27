import React, { Component } from 'react';
import {MainPageContainer,SignInForm,Title} from './styledComponents';
import {Footer,Link,ButtonTextLabel} from '../../common/styledComponents';
import strings from '../../../Common/i18n/strings.json';
import {Logo} from '../../../Common/components/Logo';
import {Button} from '../../../Common/components/Button';
import {InputElementWithLabel} from '../../common/InputElementWithLabel';

class SignInPage extends Component {
    render() {
        const {signUpTitle,username,password,confirmPassword,signup,haveAnAccount,signUplink,notAUSer}=strings.authentication
        return (
            <MainPageContainer>
                <SignInForm>
                    <Logo/>
                    <Title>{signUpTitle}</Title>
                    <InputElementWithLabel label={username}/>
                    <InputElementWithLabel label={password}/>
                    <Button onClick={this.onClick} buttonName={signup}
                            className={'signupButtonStyling'} textLabel={ButtonTextLabel}
                        />
                        <Footer>{haveAnAccount}
                            <Link>{` ${signUplink}`}</Link>
                        </Footer>
                </SignInForm>
            </MainPageContainer>
        );
    }
}

export {SignInPage} ;