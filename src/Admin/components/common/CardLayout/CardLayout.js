import React, { Component } from 'react';
import {Header} from './styledComponents';
import {MenuBar} from '../MenuBar';
import { DatePicker } from "../../../../Common/components/DatePicker";


class CardLayout extends Component {
    render() {
        return (
            <>
                <Header>
                    <MenuBar tab={'Menu2'} menu1Name={'one'} menu2Name={'two'} menu3Name={'three'} />   
                    <DatePicker/>
                </Header>
            </>
        );
    }
}

export {CardLayout};