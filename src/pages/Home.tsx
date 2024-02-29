import { useState } from 'react';
import axios from 'axios';
import OptionsContainer from '../components/OptionsContainer';

function Home() {
  const [options, setOptions] = useState(['Option  1', 'Option  2']);
  const [link, setLink] = useState('');

  const createRandomSelection = async () => {
    try {
      const response = await axios.post('http://localhost:3001/create', {
        options,
      });
      console.log('Received created ID: %s', response.data.id);
      setLink(`http://localhost:3000  /result/${response.data.id}`);
    } catch (error) {
      console.error('Failed to create random selection', error);
    }
  };

  function copyLink() {
    navigator.clipboard.writeText(link);
  }

  return (
    <>
      <OptionsContainer options={options} setOptions={setOptions} />
      <div>
        <button onClick={createRandomSelection}>Create Random Selection</button>
        {link && (
          <p>
            Share this link:
            <a target="_blank" href={link}>
              {link}
            </a>
            <button onClick={copyLink}>Copy link</button>
          </p>
        )}
      </div>
    </>
  );
}

export default Home;
