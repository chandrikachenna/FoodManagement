import React, { Component } from 'react';
import {Typo12SteelHKGroteskSemiBold} from '../../styleGuide/Typo';
import {Div,InputElement} from './styledComponents';

class InputFormElementWithLabel extends Component {
    render() {
        const {label}=this.props;
        return (
            <Div>
                <Typo12SteelHKGroteskSemiBold>
                    {label}
                </Typo12SteelHKGroteskSemiBold>
                <InputElement />
            </Div>
        );
    }
}

export {InputFormElementWithLabel};