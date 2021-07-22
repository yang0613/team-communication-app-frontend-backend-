import React from 'react';
import Emoji from './Emoji';
import {useHistory} from 'react-router-dom';
import Workspaces from './Workspaces';
import Channels from './Channels';
import DirectMsg from './DirectMsg';

/**
 * Simple component with no state.
 *
 * @return {Home} JSX
 */
function Home() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
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
      <Channels/>
      <DirectMsg/>
      <h3>{name ? name : ''}</h3>
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
