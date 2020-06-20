import React, { Component } from 'react';
import {buttonType,buttonVariant} from './constants';

import {BaseButton} from './BaseButton';
import {OutlineButton} from './OutlineButton'
import {ovalCss,rectangularCss} from './styledComponents'

class Button extends Component {
    static defaultProps={
        type:buttonType.filled,
        variant:buttonVariant.oval
    }

    static buttonTypes=buttonType
    static buttonVariants=buttonVariant

    getButtonCss=()=>{
        const {variant} =this.props;
        switch(variant){
            case buttonVariant.oval:
                return ovalCss;
            case buttonVariant.rectangular:
                return rectangularCss;
            default:
                console.warn('Invalid Variant')
                return null;
        }
    }
    render() {
        const {type,variant,...otherProps}=this.props;
        switch(type){
            case buttonType.filled:
                return <BaseButton {...otherProps} buttonCss={this.getButtonCss()}/>
            case buttonType.outline:
                return <OutlineButton {...otherProps} buttonCss={this.getButtonCss()}/>
            default:
                console.warn('Invalid Type');
                return null;
        }
    }
}

export {Button};