import React, { Component } from 'react'
import { Menu, Col } from 'antd'
import menuList from '../../langConfig/menuConfig'
class NavLeft extends Component {
    state={
        NavNode:null
    }
    componentDidMount() {
        const NavNode = this.renderNavList(menuList)
        this.setState({NavNode})
    }
    renderNavList = (data) => {
        return data.map((item,index)=>{
            if(item.children) {
                const SubMenu = Menu.SubMenu
                return <SubMenu title={item.title} key={item.key}>
                    {this.renderNavList(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }
    render() {
        console.log(this)
        return (
            <Col span={4 }>
                <Menu>
                {this.state.NavNode}
            </Menu>
            </Col>
        )
    }
}
export default NavLeft