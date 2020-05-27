import React, { Component } from 'react';
import {IconLayout,Icon} from './styledComponents';

class IconHolder extends Component {
    render() {
        const {svg}=this.props;
        return (
           <IconLayout>
               <Icon src={svg}/>
           </IconLayout>
        );
    }
}

export  {IconHolder};