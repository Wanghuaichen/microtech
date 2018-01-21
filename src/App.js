import React, { Component } from 'react';
import './sass/main.css';
import routes from './routes';
import 'babel-polyfill';

class App extends Component {

    render() {

        return (
            <div className="App">
            { routes }
            </div>
        );
    }
}

export default App;
