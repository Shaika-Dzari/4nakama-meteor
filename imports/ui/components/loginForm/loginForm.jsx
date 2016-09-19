import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AlertBox from '../alert/alert.jsx';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(event) {
        event.preventDefault();

        var self = this;
        console.log("login(event)");
        var u = this.state.username;
        var p = this.state.passwd;

        Meteor.loginWithPassword(u, p, function(err) {
            console.log(err);

            if (err) {
                self.setState({loginErrMsg: err.reason});
                self.props.onLoginError(err);
                console.log("ERROR", err.reason);
            } else {
                console.log("Success", Meteor.user());
            }
        });
    }

    handleUserNameChange(event) {
        console.log("handleUserNameChange(event)");
        this.setState({
            username : event.target.value
        });
    }

    handlePasswordChange(event) {
        console.log("handlePasswordChange(event)");
        this.setState({
            passwd : event.target.value
        });
    }

    render() {
        console.log('render');
        
        var msg = this.state.loginErrMsg;
        var alertBox = msg ? <AlertBox message={msg} /> : '';

        return (
            <div className="box darkbox">
                <div className="body">
                    {alertBox}
                    <form className="frm">
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input type="text" id="username" onChange={this.handleUserNameChange.bind(this)} />
                        <label htmlFor="passwd">Nom d'utilisateur</label>
                        <input type="password" id="passwd" onChange={this.handlePasswordChange.bind(this)} />
                        <button className="btn btnblue" onClick={this.login.bind(this)}>Connexion</button>
                    </form>
                </div>
            </div>

        );

    }
}

/*


export default class LoginForm extends Component {

    submit() {
        console.log('submit');

    }

    render() {

        return (
            <div className="box">
                <div className="body">
                    <form className="frm">
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input type="text" id="username" />
                        <label htmlFor="passwd">Nom d'utilisateur</label>
                        <input type="password" id="passwd" />
                        <button className="btn btnblue" onClick={this.submit.bind(this)}>Connexion</button>
                    </form>
                </div>
            </div>
        );
    }
}
*/

