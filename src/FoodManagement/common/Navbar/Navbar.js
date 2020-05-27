import React, { Component } from 'react';
import {Navbarcontainer,SubNav,OptionsBar} from './styledComponents';
import {Navigations} from '../../common/Navigations';
import {Logo} from '../../../Common/components/Logo';
import strings from '../../../Common/i18n/strings.json';

class Navbar extends Component {
    render() {
        const {onClickGoHome,onClickGoWeeklyMenu,onClickForProfile}=this.props;
        return (
            <Navbarcontainer>
                <SubNav>
                    <Logo/>
                </SubNav>
                <OptionsBar>
                    <Navigations navigator={strings.foodManagement.profile} onClick={onClickForProfile}/>
                    <Navigations navigator={strings.foodManagement.weeklyMenu} onClick={onClickGoWeeklyMenu}/>
                    <Navigations navigator={strings.foodManagement.home} onClick={onClickGoHome}/>
                </OptionsBar>
            </Navbarcontainer>
        );
    }
}

export {Navbar};