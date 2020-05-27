import React, { Component } from 'react';
import {Div,MessageBox,Label} from './styledComponents';
import {InputFormElement} from '../../../Common/components/InputFormElement';
import { observer } from "mobx-react";

@observer
class InputElementWithLabel extends Component {
    render() {
        const {label,value,onChange}=this.props;
        return (
            <Div>
                <Label>{label}</Label>
                <InputFormElement value={value} onChange ={onChange} />
                <MessageBox></MessageBox>
            </Div>
        );
    }
}

export {InputElementWithLabel};