import React, { Component } from 'react'
import { Input, Button, Menu, Avatar, Divider, Icon } from 'antd'
import './style/header.css'
const { SubMenu, ItemGroup } = Menu
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="topbar">
                    <div className="logo">
                        <span>哇哈哈</span>
                    </div>
                    <Input
                        placeholder="搜索菜谱、食材"
                        size="large"
                        allowClear
                        style={ {width:"22%"} }
                    />
                    <Button
                        size="large"
                        icon="search"
                        type="primary"
                    >搜菜谱</Button>
                    <div className="topbar_menu">
                        <Menu
                            mode="horizontal"
                        >
                            <SubMenu title={<span className="submenu_title_wrapper">菜谱分类</span>}>
                                <ItemGroup title="常用主题"/>
                                <ItemGroup title="常见食材"/>
                                <ItemGroup title="时令食材"/>

                            </SubMenu>
                            <Menu.Item>话题</Menu.Item>
                            <Menu.Item>菜单</Menu.Item>
                            <Menu.Item>我的主页</Menu.Item>
                        </Menu>
                    </div>
                    <div className="avatar">
                        <Avatar>U</Avatar>
                        <Divider 
                            type="vertical"
                        />
                        <Icon
                            type="book"
                            style={ {fontSize:"25px"} }
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Header