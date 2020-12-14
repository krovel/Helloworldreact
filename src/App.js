import logo from './assets/BridgeLabz-2.jpg';
import './App.css';
import React from 'react';
class App extends React.Component {
    url='http://bridgelabz.com/'
    constructor() {
        super()
        this.state = {
            title: 'Hello from BridgeLabz'
        }
    }
    onClick=($event) => {
        console.log("save button is clicked:",$event);
        window.open(this.url,"_blank");
    };
    render() {
        return ( 
        <div>
            <h1>{this.state.title}</h1>
            <img src={logo} onClick={this.onClick} 
            alt="The Bridgelabz Logo"/>
            </div>
        );
    }       
}

export default App;