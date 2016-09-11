import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import './categoryList.scss';


export default class CategoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories : [
                {_id: 1, name: 'Blog'},
                {_id: 2, name: 'Divertissement'}
            ]
        };
    }

    render() {

        let cs = this.state.categories.map((v, idx) => {
            return (
                <li key={v._id}>{v.name}</li>
            );
        })

        return (
            <div>
                <h2>Catégories</h2>
                <ul className="simple-list">
                    {cs}
                </ul>
            </div>
        );
    }
}