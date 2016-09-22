import React, { Component, PropTypes } from 'react';
import SimpleMDE from 'react-simplemde-editor';

// SimpleMDE react-simplemde-editor
// onchange
class BlogEditor extends Component {

    constructor(props) {
        super(props);
        this.onEditorChange = this.onEditorChange.bind(this);
        this.state = {
            textValue: 'This is a test...'
        };

    }

    onEditorChange(value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                <SimpleMDE onchange={this.onEditorChange}
                           value={this.state.textValue}
                            />
            </div>
        );
    }
}

export default BlogEditor;