import React, { Component } from 'react';
import {Div,MessageBox,Label} from './styledComponents';
import {InputFormElement} from '../../../Common/components/InputFormElement';
class InputElementWithLabel extends Component {
    render() {
        const {label}=this.props;
        return (
            <Div>
                <Label>{label}</Label>
                <InputFormElement />
                <MessageBox></MessageBox>
            </Div>
        );
    }
}

export {InputElementWithLabel};