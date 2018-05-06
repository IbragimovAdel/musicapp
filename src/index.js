import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'mobx-react';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
