import React, { Component } from 'react'
import { Layout, ItemInfo, Item, Category, Icon } from './styledComponents'
import DelIcon from '../../../../Common/icons/deleteIcon.svg'
import { Counter } from '../../../../Common/components/Counter'
import { observer } from 'mobx-react'

@observer
class MealItem extends Component {
   removeMealItem = () => {
      this.props.removeMealItem(this.props.itemInfo.id)
   }
   render() {
      const {
         name,
         category,
         baseUnit,
         fullMealQuantity,
         halfMealQuantity,
         incrementFullMealQuantity,
         decrementFullMealQuantity,
         incrementHalfMealQuantity,
         decrementHalfMealQuantity
      } = this.props.itemInfo
      return (
         <Layout>
            <ItemInfo>
               <Item>{name}</Item>
               <Category>{category}</Category>
            </ItemInfo>
            <Counter
               number={fullMealQuantity}
               onIncrement={incrementFullMealQuantity}
               onDecrement={decrementFullMealQuantity}
            />

            <Counter
               number={halfMealQuantity}
               onIncrement={incrementHalfMealQuantity}
               onDecrement={decrementHalfMealQuantity}
            />

            <Icon src={DelIcon} onClick={this.removeMealItem} />
         </Layout>
      )
   }
}

export { MealItem }
