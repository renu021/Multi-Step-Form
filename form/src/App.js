import React from 'react'
import Form from './Component/Form';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
