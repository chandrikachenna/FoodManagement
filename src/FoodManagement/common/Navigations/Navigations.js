import React, { Component } from 'react';
import {Text} from './styledComponents';

class Navigations extends Component {
    render() {
        const {navigator,onClick}=this.props;
        return (
            <Text onClick={onClick}>
                {navigator}
            </Text>
        );
    }
}

export {Navigations};