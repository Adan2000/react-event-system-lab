// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    
 


    render() {
      return (
          <div>
              <input type="password" onKeyUp={console.log('Entering password...')}/>
          </div>
      )  
    }
}

export default Keypad;

//we create a KeyPad component
//we render a input with the type of password
//we also add a event listner that listens for KeyUp event
//when it is triggered it console logs a message "entering password"

