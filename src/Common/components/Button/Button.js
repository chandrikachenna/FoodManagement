import React, { Component } from 'react';
import {ButtonTag} from './styledComponents';
import {Typo14WhiteRubikMedium} from '../../styleGuide/Typo';

class Button extends Component {
    render() {
        const {onClickFunction,buttonName,className}=this.props
        return (
            <ButtonTag onClick={onClickFunction} className={className}>
                <Typo14WhiteRubikMedium>
                    {buttonName}
                </Typo14WhiteRubikMedium>
            </ButtonTag>
        );
    }
}

export {Button};