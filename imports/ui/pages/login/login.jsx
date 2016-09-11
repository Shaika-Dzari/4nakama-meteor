import React, { Component, PropTypes } from 'react';
import './login.scss';

import LoginForm from '../../components/loginForm/loginForm.jsx';

export default class LoginPage extends Component {

    render () {
        return (
            <div className="login">
                <LoginForm />
            </div>
        );
    }
}
