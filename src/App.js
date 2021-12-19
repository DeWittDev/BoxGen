import './App.css';
import React, { useState } from 'react';
import Forms from './components/Forms';
import Display from './components/Display';

function App() {

  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Forms boxes={boxes} setBoxes={setBoxes} />
        <Display boxes={boxes} />
      </header>
    
    </div>
  );
}

export default App;
