
import { useState } from 'react';
import './App.css';

import ReactLifeCycle from './Components/ReactLifeCycle';
function App() {
  const [mount , unMount] = useState(true);
  return (
    <div>
      <h1>React Life Cycle</h1>
      {mount && <ReactLifeCycle />}
      <button onClick={() => unMount(!mount)}>mount/unmount</button>
    </div>
  );
}

export default App;
