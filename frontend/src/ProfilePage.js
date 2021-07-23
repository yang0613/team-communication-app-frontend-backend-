/* eslint-disable */
import React from 'react';
import BottomBar from './BottomBar';
import {useHistory} from 'react-router-dom';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
/**
 *
 * @return {Profile} JSX
 */
function Profile() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = React.useState(user ? user.name : '');
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('workspace');
    // localStorage.removeItem('recent_workspace');
    localStorage.removeItem('channels');
    setName('');
    history.push('/Login');
  };

  return (
    <div className='profile'>
      
      <div className='user'><AccountCircleOutlinedIcon/><span>{name ? name : ''}</span></div>
      <div className='status'>Offline</div>
      <button>set yourself as ONLINE</button>
      <div className='logout' onClick={handleLogout}>Logout</div>
        <BottomBar />
    </div>
  );
}

export default Profile;
