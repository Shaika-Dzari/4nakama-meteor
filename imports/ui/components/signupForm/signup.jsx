import React, { Component, PropTypes } from 'react';

export default class SignupForm extends Component {

    submit() {
        console.log('submit');

    }

    render() {

        return (
            <form className="frm">
                <label for="username">Nom d'utilisateur</label>
                <input type="text" id="username" />

                <label for="email">Courriel</label>
                <input type="text" id="email" />

                <label for="passwd">Mot de passe</label>
                <input type="password" id="passwd" />
                <label for="passwd">Mot de passe (Confirmation)</label>
                <input type="password" id="passwd" />

                <button className="btn btnblue" onClick={this.submit.bind(this)}>Soumettre</button>
            </form>
        );
    }
}