import React, { Component } from 'react';
import {ButtonTag} from './styledComponents';
import { observer } from "mobx-react";

@observer
class Button extends Component {
    render() {
        const {onClick,buttonName,className,textLabel:TextLabel}=this.props
        return (
            <ButtonTag onClick={onClick} className={className}>
                <TextLabel>{buttonName}</TextLabel>
            </ButtonTag>
        );
    }
}

export {Button};