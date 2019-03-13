import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './content/header'
import NavLeft from './content/navLeft'
import NavRight from './content/navRight'
import Footer from './content/footer'

class Admin extends Component {
    render() {
        return (
            <div id="app">
                <Header/>
                <div>
                    <Row type="flex" justify="center">
                        <Col>
                            <NavLeft></NavLeft>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Admin