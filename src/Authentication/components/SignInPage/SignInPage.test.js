import React from 'react';
import {render} from '@testing-library/react';

import {SignInPage} from '.';

describe('SignInPage',() => {

    it('should render typed username',() => {
        const username="test-user";
        const {getByPlaceholderText}=render(
            <SignInPage username={username} onChangeUsername={()=>{}}/>
        );
        const usernameField=getByPlaceholderText('Username');
        expect(usernameField.value).toBe(username);
    });

    it('should render typed password',() => {
        const password="test-password";
        const {getByPlaceholderText}=render(
            <SignInPage password={password} onChangePassword={()=>{}}/>
        );
        const passwordField=getByPlaceholderText('Password');
        expect(passwordField.value).toBe(password);
    });

    it("should render given error message", () => {
        const errorMessage="invalid username";
        const { getByText } = render(
          <SignInPage errorMessage={errorMessage} />
        )
        getByText(/invalid username/i);
    });
    
})