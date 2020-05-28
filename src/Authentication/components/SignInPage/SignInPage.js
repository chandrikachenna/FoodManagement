import React, { Component } from 'react';
import {MainPageContainer,SignInForm,Title} from './styledComponents';
import './signinPage.css';
import {Footer,Link,ButtonTextLabel} from '../../common/styledComponents';
import strings from '../../../Common/i18n/strings.json';
import {Logo} from '../../../Common/components/Logo';
import {Button} from '../../../Common/components/Button';
import {InputElementWithLabel} from '../../common/InputElementWithLabel';


class SignInPage extends Component {
    render() {
        const {username:userName,password:pwd,onChangeUsername,onChangePassword,onClickSignIn,errorMessage,loginStatus}=this.props;
        const {signUpTitle,username,password,signup,haveAnAccount,signUplink}=strings.authentication
        return (
            <MainPageContainer>
                <SignInForm>
                    <Logo/>
                    <Title>{signUpTitle}</Title>
                    <InputElementWithLabel label={username} type="text" placeholder="Username" value={userName} onChange={onChangeUsername}/>
                    <InputElementWithLabel label={password} type="password" placeholder="Password" value={pwd} onChange={onChangePassword}/>
                    <Button onClick={onClickSignIn} buttonName={signup} type="button" text="Sign in"
                            className={'signinButtonStyling'} textLabel={ButtonTextLabel}
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