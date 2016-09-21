import React from 'react';
import BlogPostTable from '../../../components/blogPostTable/blogPostTable.jsx';
import CategoryList from '../../../components/categoryList/categoryList.jsx';

export default class AdminBlogPage extends React.Component {

    render () {

        var b = [
                {
                    _id: 1,
                    title: 'Hello World',
                    text: 'Welcome to my blog',
                    author: 'Rguillemette',
                    createdAt: new Date(),
                    categories: [{_id: 1, name: 'Blog'}],
                    tags: ['blog', 'divers']
                }
            ];

        return (
            <div className="row">
                <div className="col-8">
                    <div className="box bluebox">
                        <div className="heading">
                            <h3>Blog</h3>
                        </div>
                        <div className="body">
                            <BlogPostTable blogposts={b} />
                        </div>
                        <div className="footer">
                            pagination...
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box bluebox">
                        <div className="heading">
                            <h3>Catégories</h3>
                        </div>
                        <div className="body">
                            <CategoryList />
                        </div>
                        <div className="footer">
                            Ajout
                        </div>
                    </div>

                    <div className="box bluebox">
                        <div className="heading">
                            <h3>Tags</h3>
                        </div>
                        <div className="body">
                            None
                        </div>
                        <div className="footer">
                            Ajout
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
