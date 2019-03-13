import React, { Component } from 'react';
import { Menu } from 'antd'
import NavLeft from './components/pages/navleft'
import menuList from './langConfig/menuConfig'
import {NavLink} from 'react-router-dom'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Adimn from './components/Admin'
import "../node_modules/antd/dist/antd.css"
import './App.css';
import Admin from './components/Admin';

const SubMenu = Menu.SubMenu
class App extends Component {
  state = {
    menuNode:null
  }
  componentDidMount() {
   
  }
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route></Route>
      //     <Redirect></Redirect>
      //   </Switch>
      // </Router>
      <Admin></Admin>
    );
  }
}

export default App;
