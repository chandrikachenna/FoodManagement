import React, { Component } from 'react';
import {Layout,Left,Right,Wrap} from './styledComponents';
import {Counter} from '../../../Common/components/Counter';
import {CounterModel} from '../../stores/Models/CounterModel';
import { observer } from "mobx-react";

@observer
class MealPreferenceCustom extends Component {
    render() {
        const {info}=this.props;
        Object.entries(info).map(([key, value]) => {
            value.quantity=new CounterModel();
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
                                <Counter number={value.quantity.counter} 
                                        onIncrement={()=>value.quantity.onIncrement}
                                        onDecrement={()=>value.quantity.onDecrement}
                                    />
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