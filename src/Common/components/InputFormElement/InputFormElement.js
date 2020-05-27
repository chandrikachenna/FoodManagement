import React, { Component } from 'react';
import {InputElement} from './styledComponents';
import { observer } from "mobx-react";



class InputFormElement extends Component {
    render() {
        const {value,onChange}=this.props;
        return (
                <InputElement  value={value} onChange={onChange}/>
        );
    }
}

export {InputFormElement};