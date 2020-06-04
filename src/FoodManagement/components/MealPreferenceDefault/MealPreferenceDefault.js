import React, { Component } from 'react'
import { Layout, Left, Right, Wrap } from './styledcomponents'

class MealPreferenceDefault extends Component {
   render() {
      const { mealItems } = this.props
      return (
         <Wrap>
            {mealItems.map(info => (
               <Layout key={Math.random().toString()}>
                  <Left>
                     <p>{info.name}</p>
                     <p>{info.catageory}</p>
                  </Left>
                  <Right>
                     <p>{info.quantity}</p>
                     <p>{` ${info.unit}`}</p>
                  </Right>
               </Layout>
            ))}
         </Wrap>
      )
   }
}

export { MealPreferenceDefault }
