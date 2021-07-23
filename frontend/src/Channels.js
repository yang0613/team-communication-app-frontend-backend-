/* eslint-disable */
import React from 'react';
import ChannelMsg from './ChannelMsg';

/**
 * @return {Channels}
 */
function Channels({channel}) {
  
  return (
    <div className='channels'>
      <ChannelMsg channel={channel}/>
    </div>
  );
}

export default Channels;
