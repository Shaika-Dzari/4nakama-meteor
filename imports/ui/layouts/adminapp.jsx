import React from 'react';
import { Meteor } from 'meteor/meteor';
import Header from '../components/header/header.jsx';
import { withRouter } from 'react-router';


/*
const AdminApp = ({children}) => {

    const getMeteorData = () => {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    };

    const signOut = (e)  => {
        e.preventDefault();

        // Log out the user and navigate back to the home page on success
        Meteor.logout(this.signOutCallback);
    }

    const signOutCallback = (error) =>  {
        if (error === undefined) {
            this.props.router.push('/')
        }
    }

    const componentWillMount = () =>  {
        console.log("componentWillMount");
        // Check that the user is logged in before the component mounts
        if (!getMeteorData().isAuthenticated) {
            this.props.router.push('/login')
        }
    }

    // When the data changes, this method is called
    const componentDidUpdate = (prevProps, prevState) =>  {
        console.log("componentDidUpdate");
        // Now check that they are still logged in. Redirect to sign in page if they aren't.
        if (!getMeteorData().isAuthenticated) {
            this.props.router.push('/login')
        }
    }


    return (
        <div>

            <div className="box bluebox">
                <p>Hello</p>
            </div>
            { children }
        </div>
    );
};
*/


class AdminApp extends React.Component {

    //mixins: [ReactMeteorData, History],

    constructor(props) {
        super(props);
    }

    getMeteorData() {
        // Reactively know if the user is authenticated
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    }

    signOut(e) {
        e.preventDefault();

        // Log out the user and navigate back to the home page on success
        Meteor.logout(this.signOutCallback);
    }

    signOutCallback(error) {
        if (error === undefined) {
            this.props.router.push('/')
        }
    }

    componentWillMount() {
        // Check that the user is logged in before the component mounts
        if (!this.getMeteorData().isAuthenticated) {
            this.props.router.push('/login');
        }
    }

    // When the data changes, this method is called
    componentDidUpdate(prevProps, prevState) {
        // Now check that they are still logged in. Redirect to sign in page if they aren't.
        if (!getMeteorData().isAuthenticated) {
            this.props.router.push('/login');
        }
    }

    render() {

        return (
            <div>
                <div className="box bluebox">
                    <div className="heading">Hello</div>
                    <div className="body">
                        <p>world!</p>

                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AdminApp);
