import React, { Component } from 'react';
import {InputElement} from './styledComponents';

class InputFormElement extends Component {
    render() {
        const {value,onClick}=this.props;
        return (
                <InputElement  value={value} onClick={onClick}/>
        );
    }
}

export {InputFormElement};