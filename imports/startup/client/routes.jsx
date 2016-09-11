import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { NotFound } from '../../ui/pages/not-found.jsx';
import BlogPage from '../../ui/pages/blog/blog.jsx';
import LoginPage from '../../ui/pages/login/login.jsx';


Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ BlogPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>, 
    document.getElementById('app') 
  );
});