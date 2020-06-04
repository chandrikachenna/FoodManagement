import React, { Component } from 'react'
import { Layout, Left, Right, Wrap } from './styledComponents'
import { Counter } from '../../../Common/components/Counter'
import { observer } from 'mobx-react'

@observer
class MealPreferenceCustom extends Component {
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
                     <Counter
                        number={info.quantity}
                        onIncrement={info.onIncrement}
                        onDecrement={info.onDecrement}
                     />
                     {` ${info.unit}`}
                  </Right>
               </Layout>
            ))}
         </Wrap>
      )
   }
}

export { MealPreferenceCustom }
