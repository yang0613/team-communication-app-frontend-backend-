/* eslint-disable */
import React from 'react';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import ChannelMsg from './ChannelMsg';
import Button from '@material-ui/core/Button';
/**
 * Simple component with no state.
 *
 * @param {function} setChannel set the dummy state
 */
 const fetchChannels = (setChannel, {workspace}) => {
  const item1 = localStorage.getItem('user');
  const item2 = localStorage.getItem('workspace');
  if (!item1) {
    return;
  }
  // const workspace = JSON.parse(item2);
  const user = JSON.parse(item1);
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
      // setChannel(error.toString());
    });
};
/**
 * @return {Channels}
 */
function Channels({workspace}) {
  const channels = JSON.parse(localStorage.getItem('channels'));
  // Each channel
  const [channel, setChannel] = React.useState([]);
  // Drop down menu for channel
  const [dropdownChannels, setDropdownChannels] = React.useState(true);
  React.useEffect(() => {
    fetchChannels(setChannel, {workspace});
  }, []);


  return (
    <div className='channels'>
      <div onClick={() => {setDropdownChannels(!dropdownChannels)}}style={{cursor: 'pointer'}}>
        <ExpandMoreTwoToneIcon></ExpandMoreTwoToneIcon>
        <span>Channels</span>
      </div>
      <ChannelMsg channel={channel}/>
    </div>
    
  );
}

export default Channels;
