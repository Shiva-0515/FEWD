import React, { useState } from 'react';
// import FetchUsers from './FetchUsers';
import './App.css';
import FetchUsers from './Components/FetchUsers';

function App() {
  const [showUsers, setShowUsers] = useState(true);

  return (
    <div>
      <h1>Users List</h1>
      <button onClick={() => setShowUsers(prev => !prev)}>
        {showUsers ? 'Unmount FetchUsers' : 'Mount FetchUsers'}
      </button>
      {showUsers && <FetchUsers />}
    </div>
  );
}

export default App;

