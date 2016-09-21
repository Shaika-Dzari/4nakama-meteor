import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import LoginForm from '../../components/loginForm/loginForm.jsx';

import './login.scss';


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
    }

    onSuccessLogin() {
        this.props.router.goBack();
    }

    render () {
        return (
            <div className="login">
                <LoginForm loginCallback={this.onSuccessLogin} />
            </div>
        );
    }
}

export default withRouter(LoginPage);