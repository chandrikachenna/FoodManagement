import React, { Component } from 'react';
import {CardLayout,Header,ButtonTextLabel} from './styledComponents';
import './MealPreferenceCard.css'
import {Button} from '../../../Common/components/Button';
import strings from '../../../Common/i18n/strings.json';
import {IconHolder} from '../../../Common/components/IconHolder'

class MealPreferenceCard extends Component {
    onClick=()=>{

    }
    render() {
        const {editPreference}=strings.foodManagement
        const {svg}=this.props;
        return (
            <CardLayout>
                <Header>
                    <IconHolder svg={svg}/>
                </Header>
                <Button buttonName={editPreference} className={`button-styling`} 
                onClickFunction={this.onClick} textLabel={ButtonTextLabel}/>
            </CardLayout>
        );
    }
}

export  {MealPreferenceCard};