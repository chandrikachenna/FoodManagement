import React, { Component } from 'react';
import {ButtonTag,Text} from './styledComponents';
import { observer } from "mobx-react";

@observer
class Button extends Component {
    render() {
        const {variant,onClick,name,width,color}=this.props;
        console.log(name);
        return (
            <ButtonTag onClick={onClick} variant={variant} width={width}  >
                <Text color={color}>{name}</Text>
            </ButtonTag>
        );
    }
}

export {Button};