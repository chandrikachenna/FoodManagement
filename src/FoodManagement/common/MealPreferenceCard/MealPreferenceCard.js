import React, { Component } from 'react';
import {CardLayout} from './styledComponents';
import {SetPreferenceButton} from '../../../Common/components/SetPreferenceButton';
import strings from '../../../Common/i18n/strings.json';

class MealPreferenceCard extends Component {
    onClick=()=>{

    }
    render() {
        const {foodManagement}=strings
        return (
            <CardLayout>
                <SetPreferenceButton name={foodManagement.setPreference} onClick={this.onClick}/>
            </CardLayout>
        );
    }
}

export  {MealPreferenceCard};