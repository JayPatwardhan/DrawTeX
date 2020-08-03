import React, { Component } from 'react';

class Button extends Component {
    state = { 
        text: this.props.text,
        handleClick: this.props.handleClick
     }
    
    render() { 
        return ( 
            <button className = "btn btn-secondary btn-sm" onClick = {this.state.handleClick}> {this.state.text} </button>
         );
    }
}
 
export default Button;