import React, { Component } from 'react';
import {ButtonWrapper} from './styledComponents';

class BaseButton extends Component {
    //TODO:defaultProps textTypo
    isEnabled=()=>{
        const {disabled}=this.props
        return !disabled
    }
    render() {
        const {className,onClick,text,textTypo:TextType,buttonCss}=this.props;
        let otherProps={}
        if(this.isEnabled()){
            otherProps.onClick=onClick
        }
        return (
            <ButtonWrapper css={buttonCss} className={className} {...otherProps}>
                <TextType>{text}</TextType>
            </ButtonWrapper>
        )
    }
}

export {BaseButton};