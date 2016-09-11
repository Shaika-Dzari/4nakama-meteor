import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import './blogPost.scss';

export default class BlogPost extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            showComment: false
        };
    }

    render() {
        return (
            <article className="blogpost">
                <header>
                    <h1>{this.props.title}</h1>
                    <p>Par: Auteur, le date</p>
                </header>
                <p>
                    Text
                </p>

                <footer>
                    <div className="row">
                        <div className="col-6">
                            Catégories
                        </div>
                        <div className="col-6">
                            Tags
                        </div>
                    </div>
                </footer>
            </article>
        );
    }
}