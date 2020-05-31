import React, { Component } from 'react';
import {Area,Text} from './styledComponents';
import strings from '../../i18n/strings.json';
class TextArea extends Component {

    render() {
        return (
            <Area>
                {/* <Text>{'fds'}</Text> */}
                {'Write Review'}
            </Area>
        );
    }
}

export {TextArea};