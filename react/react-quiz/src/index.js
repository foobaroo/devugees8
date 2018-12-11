import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import 'font-awesome/css/font-awesome.css';
import 'prismjs/themes/prism.css';
import './sass/style.scss';

render(<App />, document.querySelector('#main'));
