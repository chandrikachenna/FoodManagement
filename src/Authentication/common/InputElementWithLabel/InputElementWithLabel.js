import React, { Component } from 'react';
import {Div,MessageBox,Label} from './styledComponents';
import {InputFormElement} from '../../../Common/components/InputFormElement';
class InputElementWithLabel extends Component {
    render() {
        const {label,value,onClick}=this.props;
        return (
            <Div>
                <Label>{label}</Label>
                <InputFormElement value={value} onClick={onClick} />
                <MessageBox></MessageBox>
            </Div>
        );
    }
}

export {InputElementWithLabel};