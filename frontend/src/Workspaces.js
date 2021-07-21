/* eslint-disable */
// This file is largely based off of https://material-ui.com/components/app-bar/
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  dropDownCategories: {
    color: 'black',
  },
  dropDownWorkspaces: {
    color: 'black',
    fontSize: 16,
  },
}));

/**
 * Simple component with no state.
 *
 * @param {function} setWorkspaces set the dummy state
 */
const fetchWorkspaces = (setWorkspaces) => {
  const item = localStorage.getItem('user');
  if (!item) {
    console.log('empty item');
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  fetch('http://localhost:3010/v0/workspace?user_id=5f1c95b1-50e0-4904-bd79-b2e155a318c1', {
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
      console.log(json[0]);
      setWorkspaces(json[0]);
    })
    .catch((error) => {
      setWorkspaces(error.toString());
    });
};

/**
 *
 * @return {Workspaces}
 */
function Workspaces() {
  const user = JSON.parse(localStorage.getItem('user'));
  const classes = useStyles();
  const [Workspaces, setWorkspaces] = React.useState(true);
  // const [addChannel, setAddChannel] = React.useState(false);

  React.useEffect(() => {
    fetchWorkspaces(setWorkspaces);
  }, []);

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Put current workspace here
          </Typography>
          <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" onClick={(event) => {
              setWorkspaces(!showWorkspaces);
            }}>
            ⓥ
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{visibility: showWorkspaces ? 'visible' : 'hidden'}}>
        <Typography variant="h6" className={classes.dropDownCategories}>
          Workspaces
        </Typography><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setWorkspaces(false);
        }}>
        {user.name}
        {showWorkspaces.name}
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAddChannel(!addChannel);
          setWorkspaces(false);
        }}>
        + Add Workspace
        </IconButton><br/>
      </div> */}
    </div>
  );
}

export default Workspaces;
