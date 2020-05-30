import React, { Component } from 'react';
import {Layout,Button} from './styledComponents';

class Counter extends Component {
    render() {
        const {number ,onIncrement,onDecrement}=this.props;
        console.log(number)
        return (
            <Layout>
                <Button onClick={onIncrement}>-</Button>
                <Button>{number}</Button>
                <Button onClick={onDecrement}>+</Button>
            </Layout>
        );
    }
}

export {Counter};