import React, { Component } from 'react';
import {Button} from './styledComponents';
import {Typo14WhiteHKGroteskSemiBold} from '../../styleGuide/Typo';

class SetPreferenceButton extends Component {
    render() {
        const {name,onClick}=this.props;
        return (
            <Button onClick={onClick}>
                <Typo14WhiteHKGroteskSemiBold>
                    {name}
                </Typo14WhiteHKGroteskSemiBold>
            </Button>
        );
    }
}

export {SetPreferenceButton};