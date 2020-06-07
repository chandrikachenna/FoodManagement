import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Header, Content } from './styledComponents'
import HeadCountsInfo from '../HeadCountsInfo'
import { MenuBar } from '../MenuBar'
import { DatePicker } from '../../../../Common/components/DatePicker'

const menus = { menu1: 'Menu1', menu2: 'Menu2', menu3: 'Menu3' }

@observer
class MenuDisplayer extends Component {
   @observable selectedMenu
   constructor(props) {
      super(props)
      this.selectedMenu = this.props.menu
   }
   onClickMenu1 = () => {
      this.selectedMenu = menus.menu1
   }
   onClickMenu2 = () => {
      this.selectedMenu = menus.menu2
   }
   onClickMenu3 = () => {
      this.selectedMenu = menus.menu3
   }
   render() {
      const {
         menu,
         menu1Name,
         menu2Name,
         menu3Name,
         data,
         tabPane
      } = this.props
      return (
         <>
            <Header>
               <MenuBar
                  menu={menu}
                  menu1Name={menu1Name}
                  menu2Name={menu2Name}
                  menu3Name={menu3Name}
                  onClickMenu1={this.onClickMenu1}
                  onClickMenu2={this.onClickMenu2}
                  onClickMenu3={this.onClickMenu3}
               />
               <DatePicker />
            </Header>
            {this.selectedMenu && (
               <Content>
                  {this.selectedMenu.match(menus.menu1) &&
                     tabPane && tabPane.match('headCounts') && data && (
                        <HeadCountsInfo headCountsInfo={data[0]} />
                     )}
                  {this.selectedMenu.match(menus.menu2) &&
                     tabPane && tabPane.match('headCounts') && data && (
                        <HeadCountsInfo headCountsInfo={data[1]} />
                     )}
                  {this.selectedMenu.match(menus.menu3) &&
                     tabPane && tabPane.match('headCounts') && data && (
                        <HeadCountsInfo headCountsInfo={data[2]} />
                     )}
               </Content>
            )}
         </>
      )
   }
}

export { MenuDisplayer }
