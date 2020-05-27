import React, { Component } from 'react';
import {Typo20DarkBlueGreyHKGroteskMedium} from '../../../Common/styleGuide/Typo';

class Navigations extends Component {
    render() {
        const {navigator,onClick}=this.props;
        return (
            <Typo20DarkBlueGreyHKGroteskMedium onClick={onClick}>
                {navigator}
            </Typo20DarkBlueGreyHKGroteskMedium>
        );
    }
}

export {Navigations};