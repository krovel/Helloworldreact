import logo from './assets/BridgeLabz-2.jpg';
import './App.css';
import React from 'react';
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Hello from BridgeLabz'
        }
    }
    render() {
        return ( 
        <div>
            <h1>{this.state.title}</h1>
            <img src={logo} alt="The Bridgelabz Logo"/>
            </div>
        );
    }       
}

export default App;