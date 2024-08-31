import React from 'react';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </Router>
  )
}

export default App