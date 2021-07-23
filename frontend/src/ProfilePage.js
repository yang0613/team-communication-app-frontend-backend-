import React from 'react';
import {AccountCircleIcon} from '@material-ui/icons/AccountCircle';
import {HighlightOffOutlinedIcon} from
  '@material-ui/icons/HighlightOffOutlined';
import BottomBar from './BottomBar';

/**
 *
 * @return {Profile} JSX
 */
function Profile() {
  return (
    <div>
      <div>
        <AccountCircleIcon />
      </div>
      <div>Anna Admin</div>
      <div>
        <HighlightOffOutlinedIcon />
      </div>
      <div>Offline</div>
      <button>set yourself as ONLINE</button>
      <button>sign out of CSE183 Summer 2021</button>
      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default Profile;
