import React from 'react';
import Emoji from './Emoji';

import Workspaces from './Workspaces';

/**
 * Simple component with no state.
 *
 * @param {function} setDummy set the dummy state
 */
function getDummy(setDummy) {
  fetch('http://localhost:3010/v0/dummy')
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      setDummy(json.message);
    })
    .catch((error) => {
      setDummy(error.toString());
    });
}

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Home() {
  const [dummy, setDummy] = React.useState('Click the button!');
  const [emoji, setEmoji] = React.useState(false);
  return (
    <div>
      <Workspaces/>
      <h3 id='instruction'>
        Click button to connect to the Backend dummy endpoint</h3>
      <button
        onClick={(event) => {
          getDummy(setDummy);
        }}
      >
        Get Dummy
      </button>
      <p/>
      <label>{dummy}</label>

      <p/>
      <hr/>
      <a href='/Login'>Login</a>
      <p/>


      <button
        onClick={(event) => {
          setEmoji(!emoji);
        }}
      >
        Emoji Picker
      </button>

      <p/>
      <div style={{visibility: emoji ? 'visible' : 'hidden'}}>
        <Emoji/>
      </div>
    </div>
  );
}

export default Home;
