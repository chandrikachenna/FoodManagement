import React, { Component } from 'react'
import { MealItem } from '../common/MealItem'
import { observer } from 'mobx-react'

interface ScheduleMealListProps{
   data:any
}


@observer
class ScheduleMealList extends Component<ScheduleMealListProps> {
   render() {
      const { mealTypeInfo, removeMealItem } = this.props.data
      console.log(mealTypeInfo)
      return (
         <>
            {mealTypeInfo.map(itemInfo => (
               <MealItem
                  key={Math.random().toString()}
                  itemInfo={itemInfo}
                  removeMealItem={removeMealItem}
               />
            ))}
         </>
      )
   }
}

export { ScheduleMealList }
