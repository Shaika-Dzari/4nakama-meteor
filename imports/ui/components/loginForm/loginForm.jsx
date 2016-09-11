import React, { Component, PropTypes } from 'react';

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