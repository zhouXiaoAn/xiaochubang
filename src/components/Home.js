import React, { Component } from 'react'
import {injectIntl} from 'react-intl';
class Home extends Component {
    render() {
        console.log(this.props,"")
        return (
            <div>
                {this.props.intl.formatMessage({id:"intl.NETWORK_ERROR"})}
            </div>
        )
    }
}
export default injectIntl(Home)