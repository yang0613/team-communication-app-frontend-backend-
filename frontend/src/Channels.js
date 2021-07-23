/* eslint-disable */
import React from 'react';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import ChannelMsg from './ChannelMsg';

/**
 * @return {Channels}
 */
function Channels({channel}) {
  const channels = JSON.parse(localStorage.getItem('channels'));
  const [dropdownChannels, setDropdownChannels] = React.useState(true);

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
