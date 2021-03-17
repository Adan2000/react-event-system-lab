// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    
    
    render() {
      return (
          <div>
              <input>
                type="password"
                onKeyUp={this.handleInputPassword}
              </input>
          </div>
      )  
    }
}

export default Keypad;

//we write a div with a input tag with a password type
//we add a onKeyUp event listener