/* eslint-disable */
// This file is based off of https://material-ui.com/components/app-bar/
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import Channels from './Channels';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    position: 'absolute',
    right: '10px',
    top: '5px',
    'z-index': 1,
  },
  menuIcon: {
    fontSize: '40px',
  },
  title: {
    flexGrow: 1,
  },
  dropDownMenu: {
    color: 'black',
  },
}));

/**
 * Simple component with no state.
 *
 * @param {function} setWorkspaces set the dummy state
 */
const fetchWorkspaces = (setWorkspaces, setChannel, id) => {
  const item = localStorage.getItem('user');

  if (!item) {
    console.log('empty item');
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  const result = fetch('http://localhost:3010/v0/workspace', {
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
      setWorkspaces(json);
      localStorage.setItem('workspace', JSON.stringify(json));
      if(!id){
        id = json[0].workspace_id;
      }
      return fetch(`http://localhost:3010/v0/channel/${id}`, {
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      });
    })
    .catch((error) => {
      setWorkspaces(error.toString());
    });

    result.then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      setChannel(json);
      localStorage.setItem('channels', JSON.stringify(json));
    })
    .catch((error) => {
      setChannel(error.toString());
    });
};
/**
 *
 * @return {Workspaces}
 */
function Workspaces() {
  // Line below might not be needed
  const workspace = JSON.parse(localStorage.getItem('workspace'));
  const classes = useStyles();
  // Each workspace
  const [workspaces, setWorkspaces] = React.useState([]);
  const [channel, setChannel] = React.useState([]);
  const [recent, setRecent] = React.useState([]);
  // Drop down menu for workspaces
  const [dropdownWorkspaces, setDropdownWorkspaces] = React.useState(true);
  let id = null;
  React.useEffect(() => {
    fetchWorkspaces(setWorkspaces, setChannel, id);
  }, []);

  const handleChange = () => {
    setDropdownWorkspaces(!dropdownWorkspaces);
  }

  const handleWorkspace = (id) => {
    if (id != workspace[0].id){
      localStorage.removeItem('channels');
      fetchWorkspaces(setWorkspaces, setChannel, id);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <div className={classes.menuButton}
            >
            <ExpandMoreTwoToneIcon onClick={() => handleChange()} className={classes.menuIcon}/>
          </div>
        {workspaces.map( w => 
          
        <Toolbar style={{display: dropdownWorkspaces ? '' : 'none'}}>
          <Typography variant="h5" onClick={() => handleWorkspace(w.workspace_id)}className={classes.title} key={w.workspace_id}>{w.name}</Typography>
        </Toolbar>)}
      </AppBar>
      <Channels workspace={workspace} channel={channel}/>
    </div>
  );
}

export default Workspaces;
