import React, { Component } from 'react'
import { Menu, Col } from 'antd'
import menuList from '../../langConfig/menuConfig'
import '../../../node_modules/antd/dist/antd.css'
// console.log(menuList)
const SubMenu = Menu.SubMenu
class NavLeft extends Component {
    _renderMenu = function(data) {
        return data.map((item,index)=>{
            const { children, title, key } = item
            if(children) {
                return <SubMenu title={title} key={key}>
                    {this._renderMenu(children)}
                </SubMenu>
            }
            return <Menu.Item title={title} key={key}>{title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <Menu>
                    {
                        this._renderMenu(menuList)
                    }
                </Menu>
            </div>
        )
    }
}
export default NavLeft