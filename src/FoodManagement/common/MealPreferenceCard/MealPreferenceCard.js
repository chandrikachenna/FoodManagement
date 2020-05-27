import React, { Component } from 'react';
import {CardLayout,ButtonTextLabel} from './styledComponents';
import './MealPreferenceCard.css'
import {Button} from '../../../Common/components/Button';
import strings from '../../../Common/i18n/strings.json';

class MealPreferenceCard extends Component {
    onClick=()=>{

    }
    render() {
        const {setPreference}=strings.foodManagement
        return (
            <CardLayout>
                <Button buttonName={setPreference} className={`button-styling`} 
                onClickFunction={this.onClick} textLabel={ButtonTextLabel}/>
            </CardLayout>
        );
    }
}

export  {MealPreferenceCard};