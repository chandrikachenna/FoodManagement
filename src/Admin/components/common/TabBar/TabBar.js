import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function panesList(One, Two, Three) {
   return [
      {
         menuItem: 'SHEDULE MEAL',
         render: () => (
            <Tab.Pane attached={false}>
               <One />
            </Tab.Pane>
         )
      },
      {
         menuItem: 'HEAD COUNT',
         render: () => (
            <Tab.Pane attached={false}>
               <Two />
            </Tab.Pane>
         )
      },
      {
         menuItem: 'FOOD WASTAGE LOG',
         render: () => (
            <Tab.Pane attached={false}>
               <Three />
            </Tab.Pane>
         )
      }
   ]
}

class TabBar extends React.Component {
   render() {
      const {
         renderedComponent1,
         renderedComponent2,
         renderedComponent3
      } = this.props
      return (
         <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panesList(
               renderedComponent1,
               renderedComponent2,
               renderedComponent3
            )}
         />
      )
   }
}

export { TabBar }