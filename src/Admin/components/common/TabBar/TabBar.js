import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {MenuDisplayer} from '../MenuDisplayer';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => 
    <Tab.Pane attached={false}>
         <MenuDisplayer/>
    </Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const TabBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export {TabBar}
