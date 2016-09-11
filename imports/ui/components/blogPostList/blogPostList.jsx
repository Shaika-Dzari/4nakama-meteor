import React, { Component, PropTypes } from 'react';
import './blogPostList.scss'

import BlogPost from '../blogPost/blogPost.jsx';

export default class BlogPostList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogposts: [
                {
                    _id: 1,
                    title: 'Hello World',
                    text: 'Welcome to my blog',
                    author: 'Rguillemette',
                    createdAt: new Date(),
                    categories: [{_id: 1, name: 'Blog'}],
                    tags: ['blog', 'divers'] 
                }
            ]
        };
    }

    render() {
        let bs = this.state.blogposts.map((b, idx) => {
            return (
                <BlogPost key={b._id} {...b} />
            );
        });

        return (
            <div className="blogpost">
                <div className="blogpost-list">
                    {bs}
                </div>
                <div className="blogpost-pagination">
                    
                </div>          
            </div>
        );
    }
}