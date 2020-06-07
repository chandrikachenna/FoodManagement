import React, { Component } from 'react'
import { Layout, ItemInfo, Text, Category, Div } from './styledComponents'

class MealItemHeadCounts extends Component {
   render() {
      const { name, category, quantity, base_unit } = this.props.info
      return (
         <Layout>
            <ItemInfo>
               <Text>{name}</Text>
               <Category>{category}</Category>
            </ItemInfo>
            <Div>
               <Text>{quantity}</Text>
               <Text>{base_unit}</Text>
            </Div>
         </Layout>
      )
   }
}

export { MealItemHeadCounts }
