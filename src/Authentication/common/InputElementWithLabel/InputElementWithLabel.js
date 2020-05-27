import React, { Component } from 'react';
import {Div,MessageBox} from './styledComponents';
import {Typo12SteelHKGroteskSemiBold} from '../../../Common/styleGuide/Typo';
import {InputFormElement} from '../../../Common/components/InputFormElement';
class InputElementWithLabel extends Component {
    render() {
        const {label}=this.props;
        return (
            <Div>
                <Typo12SteelHKGroteskSemiBold>{label}</Typo12SteelHKGroteskSemiBold>
                <InputFormElement />
                <MessageBox></MessageBox>
            </Div>
        );
    }
}

export {InputElementWithLabel};