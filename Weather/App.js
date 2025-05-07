import React from 'react';
import './App.css';

import Weather from './Components/Weather';
function App() {
  return (
    <div>
  
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Weather/>
    </div>
  );
}

export default App;
