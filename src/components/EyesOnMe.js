import React from 'react';

class EyesOnMe extends React.Component {


    render() {
        return (
            <button onFocus={console.log('Good!')} onBlu={console.log('Hey! Eyes on me!')}/> 
        )
     }
}

export default EyesOnMe;

//we first create a eyesOnme class component
//in the render we add in a button 
//we add two event listeners, onFocus & onBlue
//when the focus one gets triggered we console log '"Good"
//whe the blue event fires we console.log Hey! Eyes on me!