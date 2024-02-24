// Run by command: npm start
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [options, setOptions] = useState(['Option  1', 'Option  2']);
  const [link, setLink] = useState('');

  const createRandomSelection = async () => {
    try {
      const response = await axios.post('http://localhost:3001/create', {
        options,
      });
      console.log('Received created ID: %s', response.data.id);
      setLink(`http://localhost:3001/result/${response.data.id}`);
    } catch (error) {
      console.error('Failed to create random selection', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Option  1"
            value={options[0]}
            onChange={(e) => setOptions([e.target.value, options[1]])}
          />
          <input
            type="text"
            placeholder="Option  2"
            value={options[1]}
            onChange={(e) => setOptions([options[0], e.target.value])}
          />
          <button onClick={createRandomSelection}>
            Create Random Selection
          </button>
          {link && <p>Share this link: {link}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
