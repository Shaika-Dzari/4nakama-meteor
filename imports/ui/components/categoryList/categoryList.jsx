import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import './categoryList.scss';

const CategoryList = () => {

    // Fake, load dynamic instead
    var st = {
        categories : [
            {_id: 1, name: 'Blog'},
            {_id: 2, name: 'Divertissement'}
        ]
    };

    var cs = st.categories.map((v, idx) => {
        return (
            <li key={v._id}>{v.name}</li>
        );
    });

    return (
        <div>
            <h2>Catégories</h2>
            <ul className="simple-list">
                {cs}
            </ul>
        </div>
    );
}

export default CategoryList;