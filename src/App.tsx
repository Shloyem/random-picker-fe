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

  function addOption(): void {
    const addedOption = `Option ${options.length + 1}`;
    setOptions([...options, addedOption]);
  }

  function updateOption(index: number, newOption: string): void {
    const newOptions = [...options];
    newOptions[index] = newOption;
    setOptions(newOptions);
  }

  function removeOption(index: number): void {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  }

  return (
    <div className="App">
      <header className="App-header">
        {options.map((value, index) => (
          <div>
            <input
              key={index}
              value={value}
              onChange={(e) => {
                updateOption(index, e.target.value);
              }}
            />
            {index >= 2 ? (
              <button
                onClick={() => {
                  removeOption(index);
                }}
              >
                Remove option
              </button>
            ) : (
              <div></div>
            )}
          </div>
        ))}
        <div>
          <button onClick={addOption}>Add option</button>
        </div>
        <div>
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
