/* eslint-disable */
import React from 'react';

/**
 * Simple component with no state.
 *
 * @param {function} setChannel set the dummy state
 */
 const fetchChannels = (setChannel) => {
  const item = localStorage.getItem('user');
  if (!item) {
    return;
  }
  const workspace = JSON.parse(localStorage.getItem('workspace'));
  console.log(workspace[0].workspace_id);
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  fetch(`http://localhost:3010/v0/channel/${workspace[0].workspace_id}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      setChannel(json);
      localStorage.setItem('channels', JSON.stringify(json));
    })
    .catch((error) => {
      setChannel(error.toString());
    });
};
/**
 * @return {Channels}
 */
function Channels() {
  // const channels = JSON.parse(localStorage.getItem('channels'));
  // Each channel
  const [channel, setChannel] = React.useState([]);
  // Drop down menu for channel
  const [dropdownChannels, setDropdownChannels] = React.useState(true);

  React.useEffect(() => {
    fetchChannels(setChannel);
  }, []);
  return (
    <div>
      <div onClick={() => {setDropdownChannels(!dropdownChannels)}}style={{cursor: 'pointer'}}>
        <h3>Channels</h3>
      </div>
      <div style={{display: dropdownChannels ? 'block' : 'none'}}>
      {channel.map(c => <div key={c.channel_id}>{c.name}</div>)}
      </div>
    </div>
  );
}

export default Channels;
