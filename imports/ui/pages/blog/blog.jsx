import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import './blog.scss';

import CategoryList from '../../components/categoryList/categoryList.jsx';
import BlogPostList from '../../components/blogPostList/blogPostList.jsx';

export default class BlogPage extends Component {

    render () {
        return (
            <div className="row">
                <div className="col-8">
                    <BlogPostList />
                </div>
                <div className="col-4">
                    <CategoryList />
                </div>
            </div>
        );
    }
}
