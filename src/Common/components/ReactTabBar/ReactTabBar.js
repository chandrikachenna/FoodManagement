import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
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

class ReactTabBar extends Component {
  state = { color: colors[7] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, (c) => (
        <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
        </select>

        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
}

export {ReactTabBar}
