import React, { Component } from 'react';
import {Layout,Left,Right,Wrap} from './styledcomponents'


class MealPreferenceDefault extends Component {
    render() {
        const {info}=this.props;
        
        return (
            <Wrap>
            {
                Object.entries(info).map(([key, value]) => 
                    <Layout>
                        <Left>
                            <p>{value.item.name}</p>
                            <p>{value.item.catageory}</p>
                        </Left>
                        <Right>
                            <p>{value.quantity.number}</p> 
                            <p>{` ${value.item.unit}`}</p>
                        </Right>
                    </Layout>
                )
            }
            
        </Wrap>
        );
    }
}

export {MealPreferenceDefault};