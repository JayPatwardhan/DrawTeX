import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw"

class Canvas extends Component {

    state = {  
        disabled: false,
    }
    render() { 
        return ( 
            <div>
               <CanvasDraw
                    style={{
                        boxShadow:
                        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
                        width: 400,
                        height: 400
                    }} brushRadius = {1} lazyRadius = {0} disabled = {this.state.disabled}/>
            </div>
         );
    }
}
 
export default Canvas;