import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

export default class AdminPage extends Component {

    render () {
        return (
            <div className="box">
                <h1>Admin Page</h1>
                <Link to="/admin/blog" activeClassName="active">Blog</Link>
                <Link to="/admin/file" activeClassName="active">File</Link>
                <br />
                
            </div>
        );
    }
}
