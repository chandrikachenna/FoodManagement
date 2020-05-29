import React, { Component } from 'react';
import {ButtonTag} from './styledComponents';
import { observer } from "mobx-react";

@observer
class Button extends Component {
    render() {
        const {onClickFunction,buttonName,className,textLabel:TextLabel}=this.props
        return (
            <ButtonTag onClick={onClickFunction} className={className}>
                <TextLabel>{buttonName}</TextLabel>
            </ButtonTag>
        );
    }
}

export {Button};