import React, { Component } from 'react';
import {OutlineButtonWrapper} from './styledCompoents';

class OutlineButton extends Component {
    render() {
        return (
            <OutlineButtonWrapper {...this.props}/>
        );
    }
}

export {OutlineButton};