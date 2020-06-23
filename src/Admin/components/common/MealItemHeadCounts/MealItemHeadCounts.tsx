import React, { Component } from 'react'
import { Layout, ItemInfo, Text, Category, Div } from './styledComponents'
type MealInfo={
   name:string,
   category:string,
   quantity:number,
   base_unit:string
}
interface MealItemHeadCountsProps{
   info:MealInfo
}
class MealItemHeadCounts extends Component<MealItemHeadCountsProps> {
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
