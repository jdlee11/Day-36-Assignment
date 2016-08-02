import { Route, Router, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DocReader from './components/docReader';
import DocModal from './components/docModal';
import Doc from './models/doc';
import store from './store';

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={DocReader}>
      <Route path=":id" component={DocModal}/>
    </Route>
  </Router>
);

ReactDOM.render(router,
  document.getElementById('container'));
hashHistory.push('/');
