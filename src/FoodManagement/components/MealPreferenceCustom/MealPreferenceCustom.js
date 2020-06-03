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
               <Layout>
                  <Left>
                     <p>{info.mealItemInfo.name}</p>
                     <p>{info.mealItemInfo.catageory}</p>
                  </Left>
                  <Right>
                     <Counter
                        number={info.quantity}
                        onIncrement={info.onIncrement}
                        onDecrement={info.onDecrement}
                     />
                     {` ${info.mealItemInfo.unit}`}
                  </Right>
               </Layout>
            ))}
         </Wrap>
      )
   }
}

export { MealPreferenceCustom }
