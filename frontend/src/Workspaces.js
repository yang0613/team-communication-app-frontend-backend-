/* eslint-disable */ 
// This file is based off of https://material-ui.com/components/app-bar/
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto', 
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
const fetchWorkspaces = async(setWorkspaces) => {
  const item = localStorage.getItem('user');
  if (!item) {
    console.log('empty item');
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  await fetch('http://localhost:3010/v0/workspace', {
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
      localStorage.setItem('workspace', JSON.stringify(json));
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
  const workspace = JSON.parse(localStorage.getItem('workspace'));
  const classes = useStyles();
  // Each workspace
  const [workspaces, setWorkspaces] = React.useState([]);
  // Drop down menu for workspaces
  const [dropdownWorkspaces, setDropdownWorkspaces] = React.useState(false);
  React.useEffect(() => {
    fetchWorkspaces(setWorkspaces);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          {workspace ? workspace[0].name : ''}
          </Typography>
          
          <IconButton edge="end" className={classes.menuButton}
            color="inherit"  aria-label="menu" onClick={(event) => {
              setDropdownWorkspaces(!dropdownWorkspaces);
            }}>
            <ExpandMoreTwoToneIcon className={classes.menuIcon}/>
          </IconButton>
        </Toolbar>
        <Toolbar style={{display: dropdownWorkspaces ? '' : 'none'}}>
          <Typography variant="h6" className={classes.title}>
          {workspace ? workspace[1].name : ''}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Workspaces;
