import React, { Component } from 'react'
import { Layout, Button, Text } from './styledComponents'

class Counter extends Component {
   render() {
      const { number, onIncrement, onDecrement } = this.props
      return (
         <Layout>
            <Button onClick={onDecrement} disabled={number <= 0 && 'true'}>
               -
            </Button>
            <Text>{number}</Text>
            <Button onClick={onIncrement}>+</Button>
         </Layout>
      )
   }
}

export { Counter }
