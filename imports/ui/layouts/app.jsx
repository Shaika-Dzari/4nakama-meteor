import React from 'react';
import Header from '../components/header/header.jsx';


export const App = ( { children } ) => (
  <div>
    <Header />
    { children }
  </div>
)


/*
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                { this.props.children }
            </div>
        );
    }
}
*/
