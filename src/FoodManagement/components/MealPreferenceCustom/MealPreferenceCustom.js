import React, { Component } from 'react';
import {Layout,Left,Right,Wrap} from './styledComponents';
import {Counter} from '../../../Common/components/Counter';


class MealPreferenceCustom extends Component {
    render() {
        const {info}=this.props;
        Object.entries(info).forEach(([key, value]) => {
            console.log(value.item,value.quantity)
         })
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
                                <Counter number={value.quantity.number} />
                                {` ${value.item.unit}`}
                            </Right>
                        </Layout>
                    )
                }
                
            </Wrap>
        );
    }
}

export {MealPreferenceCustom};