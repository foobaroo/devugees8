import React from 'react';
import ReactDOM from 'react-dom';
import ReactDemo from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactDemo />, document.getElementById('root'));

serviceWorker.unregister();
