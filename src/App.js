import React, {useRef} from 'react';
import './App.css';
import Button from './components/button'
import CanvasDraw from "react-canvas-draw"

function App() {


  const mycanvas = useRef(null)

  const handleClick = () => {
    const data = mycanvas.current.getSaveData();
    console.log(data);
  }

  const clearClick = () => {
    mycanvas.current.clear();
  }

  const undoClick = () => {
    mycanvas.current.undo()
  }

  
  return (
    <div>
      <h1 style = {{textAlign: 'center', marginTop: '50px'}}>DrawTeX</h1>
      <div>
        <CanvasDraw
            style={{
                boxShadow:
                "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
                width: 400,
                height: 400
            }} brushRadius = {1} lazyRadius = {0} ref = {mycanvas}
        />
        </div>
      <Button text = "Go!" handleClick = {handleClick}/>
      <Button text = "Clear Drawing" handleClick = {clearClick}/>
      <Button text = "Undo" handleClick = {undoClick}/>
    </div>
  );
}

export default App;
