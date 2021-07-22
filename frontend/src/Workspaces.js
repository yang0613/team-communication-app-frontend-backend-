// This file is based off of https://material-ui.com/components/app-bar/
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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
  dropDownMenu: {
    color: 'black',
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
  fetch('http://localhost:3010/v0/workspace', {
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
      setWorkspaces(json);
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
  // Line below might not be needed
  // const user = JSON.parse(localStorage.getItem('user'));
  const classes = useStyles();
  // Each workspace
  const [Workspaces, setWorkspaces] = React.useState(true);
  // Drop down menu for workspaces
  const [dropdownWorkspaces, setDropdownWorkspaces] = React.useState(true);

  React.useEffect(() => {
    fetchWorkspaces(setWorkspaces);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {Workspaces[0].name}
          </Typography>
          <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" onClick={(event) => {
              setDropdownWorkspaces(!dropdownWorkspaces);
            }}>
            ⓥ
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{visibility: dropdownWorkspaces ? 'visible' : 'hidden'}}>
        {Workspaces.map((workspace) => (
          <tr>
          <IconButton className={classes.dropDownMenu} onClick={(event) => {
            setDropdownWorkspaces(false);
          }}>{workspace.name}</IconButton>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Workspaces;
