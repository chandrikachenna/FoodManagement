import React, { Component } from 'react';
import {ButtonTag,Text} from './styledComponents';

class ButtonComponent extends Component {
    render() {
        const {onClick,text} =this.props;   
        return (
            <ButtonTag  onClick={onClick}>
                <Text >
                    {text}
                </Text>
            </ButtonTag>
        );
    }
}

export  {ButtonComponent};