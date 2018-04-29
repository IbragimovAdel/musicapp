import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'mobx-react';
import store from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
