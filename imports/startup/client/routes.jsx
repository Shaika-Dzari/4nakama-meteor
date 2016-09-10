import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { NotFound } from '../../ui/pages/not-found.jsx';

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>, 
    document.getElementById('app') 
  );
});