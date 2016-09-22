import React from 'react';
import {Link} from 'react-router';

const BlogPostTable = (args) => {

    console.log(args);

    var blogpostsTrs = args.blogposts.map((v, idx) => {
        var pub = v.published = 1 ? 'Publié' : 'Non-Publié';
        var gourl = '/admin/blog/' + v._id;

        return (
            <tr key={v._id}>
                <td><Link to={gourl}>{v.title}</Link></td>
                <td>{pub}</td>
            </tr>
        );
    });

    return (
        <div>
            <table>
                <tbody>
                    {blogpostsTrs}
                </tbody>
            </table>
        </div>
    );
};

export default BlogPostTable;