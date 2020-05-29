import React, { Component } from 'react';
import {ButtonTag,Text} from './styledComponents';

class ButtonComponent extends Component {
    render() {
        const {btnBg,textBg,text,onClick}=this.props
        return (
            <ButtonTag color={btnBg} onClick={onClick}>
                <Text color={textBg}>
                    {text}
                </Text>
            </ButtonTag>
        );
    }
}

export  {ButtonComponent};