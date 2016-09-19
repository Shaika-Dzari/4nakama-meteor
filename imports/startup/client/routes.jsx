import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App }      from '../../ui/layouts/app.jsx';
import { NotFound } from '../../ui/pages/not-found.jsx';

import AdminApp from '../../ui/layouts/adminapp.jsx';

import BlogPage from '../../ui/pages/blog/blog.jsx';
import BlogPostPage from '../../ui/pages/blogpost/blogpost.jsx';
import LoginPage from '../../ui/pages/login/login.jsx';
import AdminPage from '../../ui/pages/admin/admin.jsx';
import AdminBlogPage from '../../ui/pages/admin/blog/blog.jsx';
import AdminFilePage from '../../ui/pages/admin/file/file.jsx';



Meteor.startup(() => {
    render(
        <Router history={ browserHistory }>

            <Route path="/" component={ App }>
                <IndexRoute component={ BlogPage } />
                <Route path="login" component={ LoginPage } />
                <Route path="blog/:id" component={ BlogPostPage } />
                <Route path="/admin" component={ AdminApp }>
                    <IndexRoute component={ AdminPage } />
                    <Route path="blog" component={ AdminBlogPage } />
                    <Route path="file" component={ AdminFilePage } />
                </Route>
                <Route path="*" component={ NotFound } />
            </Route>
        </Router>,
        document.getElementById('app')
    );
});

/**
 * 
      <Route path="/admin" component={ AdminApp }>
        <IndexRoute component={AdminBlogPage} />
        <Route path="/admin" component={ AdminBlogPage } />
        <Route path="/admin/blog" component={ AdminBlogPage } />
        <Route path="/admin/file" component={ AdminBlogPage } />
      </Route>
 * 
 */