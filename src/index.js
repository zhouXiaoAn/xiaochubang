import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import {zh_CN} from './langConfig/zh'
import {en_US} from './langConfig/us'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
addLocaleData([...en,...zh])
const lang = {
    'zh':zh_CN,
    'en':en_US
}
ReactDOM.render(
    <IntlProvider locale={"en"} messages={lang['en']}>
        <App />
    </IntlProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
