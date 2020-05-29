import React, { Component } from 'react';
import {Label,Text} from './styledComponents';
class TextLabel extends Component {
    render() {
        const {text}=this.props;
        return (
            <Label>
                <Text>
                    {text}
                </Text>
            </Label>
        );
    }
}

export  {TextLabel};