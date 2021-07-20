import React from 'react';
import Emoji from './Emoji';
import Workspaces from './Workspaces';
import {useHistory} from 'react-router-dom';

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
 * @return {Home} JSX
 */
function Home() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  const [dummy, setDummy] = React.useState('Click the button!');
  const [emoji, setEmoji] = React.useState(false);
  const [name, setName] = React.useState(user ? user.name : '');

  if (!user) {
    history.push('/Login');
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setName('');
    history.push('/Login');
  };

  return (
    <div>
      <Workspaces/>
      <h2>{name ? name : ''}</h2>
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
      <button onClick={handleLogout}>Logout</button>
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
