import logo from './assets/BridgeLabz-2.jpg';
import './App.css';
import React from 'react';
class App extends React.Component {
    url='http://bridgelabz.com/'
    constructor() {
        super()
        this.state = {
            userName: '',
            nameError: ''
        }
    }
    onClick=($event) => {
        console.log("save button is  clicked:",$event);
        window.open(this.url,"_blank");
    };onNameChange =(event) => {
        console.log("Value is ", event.target.value);
        const NAME_REGEX=RegExp('^[A-Z]{1}[a-z\\s]{2,}$');
        this.setState({userName: event.target.value});    
        if(NAME_REGEX.test(event.target.value)) {
            this.setState({nameError: ''})
        } else {
            this.setState({nameError: 'Name is Incorrect'})
        }  
      };
      render() {
          return ( 
                  <div>
                      <div>
                          <h1>Hello {this.state.userName} from BridgeLabz</h1>
                          <img src={logo} onClick={this.onClick}
                          alt="The Bridgelabz Logo"/>
                      </div>
                      <div className="text-box">
                          <input onChange={this.onNameChange}/>
                          <span className="error-output">{this.state.nameError}</span>
                      </div>
                  </div>
                  );
    }       
}

export default App;