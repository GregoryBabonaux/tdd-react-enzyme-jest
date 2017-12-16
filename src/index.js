import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {BeerListContainer} from './components';

ReactDOM.render(
  <BeerListContainer/>,
  document.querySelector('#root'));
registerServiceWorker();