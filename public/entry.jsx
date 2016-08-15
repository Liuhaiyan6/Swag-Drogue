import MainBody from './components/edit.jsx';
import NewsBody from './components/news.jsx'
import Share from './components/share.jsx';
import RecommendationBody from './components/recommendation.jsx';
import Index from './components/index.jsx';
import RegisterBody from './components/register.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('./styles/edit.css');
require('./styles/share.css');
require('./styles/news.css');
require('./styles/recommendation.css');
require('./styles/index.css');
require('./styles/register.css');
ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={Index}/>
    <Route path='/news' component={NewsBody}/>
    <Route path='/share' component={Share}/>
    <Route path='/edit' component={MainBody}/>
    <Route path='/recommendation' component={RecommendationBody}/>
    <Route path='/index' component={Index}/>
    <Route path='/register' component={RegisterBody}/>
  </Router>,
  document.getElementById('mainbody'));
if (module.hot) {
  module.hot.accept();
}
