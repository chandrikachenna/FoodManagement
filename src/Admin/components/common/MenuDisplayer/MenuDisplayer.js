import React, { Component } from 'react'
import { Header, Content } from './styledComponents'
import { MenuBar } from '../MenuBar'
import { DatePicker } from '../../../../Common/components/DatePicker'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

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
      const { menu, menu1Name, menu2Name, menu3Name } = this.props
      console.log(menu)
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
                  {this.selectedMenu.match(menus.menu1) && <p>1</p>}
                  {this.selectedMenu.match(menus.menu2) && <p>2</p>}
                  {this.selectedMenu.match(menus.menu3) && <p>3</p>}
               </Content>
            )}
         </>
      )
   }
}

export { MenuDisplayer }
