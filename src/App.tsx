// Run by command: npm start
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import OptionsContainer from './OptionsContainer';
import getResult from './services/getResult';

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

  function copyLink() {
    navigator.clipboard.writeText(link);
  }

  // temporary function
  function check() {
    if (link) {
      const lastIndex = link.lastIndexOf('/');
      const id = link.substring(lastIndex + 1);
      console.log('id %s', id);

      getResult(id).then(
        (result1) => {
          console.log({ result1 });
        },
        () => {
          console.error();
        },
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <OptionsContainer options={options} setOptions={setOptions} />
        <div>
          <button onClick={createRandomSelection}>
            Create Random Selection
          </button>
          {link && (
            <p>
              Share this link:
              <a target="_blank" href={link}>
                {link}
              </a>
              <button onClick={copyLink}>Copy link</button>
              <button onClick={check}>Get result</button>
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
