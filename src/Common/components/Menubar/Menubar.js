import React, { Component } from 'react';
import {MenuButton,Icon} from './styledComponents';
import Menu_Icon from '../../../Common/icons/menu_icon.svg';

class Menubar extends Component {
    render() {
        return (
            <MenuButton>
                <Icon src={Menu_Icon}/>
            </MenuButton>
        );
    }
}

export  {Menubar};