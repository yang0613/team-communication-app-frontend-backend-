// This file is largely based off of https://material-ui.com/components/app-bar/
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
  dropDownCategories: {
    color: 'black',
  },
  dropDownChannels: {
    color: 'black',
    fontSize: 16,
  },
}));

/**
 *
 * @return {Workspaces}
 */
function Workspaces() {
  const classes = useStyles();
  const [dropDownMenu, setDropDownMenu] = React.useState(false);
  const [assignment1, setAssignment1] = React.useState(false);
  const [assignment2, setAssignment2] = React.useState(false);
  const [assignment3, setAssignment3] = React.useState(false);
  const [assignment4, setAssignment4] = React.useState(false);
  const [general, setGeneral] = React.useState(false);
  const [addChannel, setAddChannel] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CSE183 Summer 2021
          </Typography>
          <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" onClick={(event) => {
              setDropDownMenu(!dropDownMenu);
            }}>
            ⓥ
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{visibility: dropDownMenu ? 'visible' : 'hidden'}}>
        <Typography variant="h6" className={classes.dropDownCategories}>
          ⓥ Channels
        </Typography><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAssignment1(!assignment1);
          setDropDownMenu(false);
        }}>
        # Assignment 1
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAssignment2(!assignment2);
          setDropDownMenu(false);
        }}>
        # Assignment 2
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAssignment3(!assignment3);
          setDropDownMenu(false);
        }}>
        # Assignment 3
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAssignment4(!assignment4);
          setDropDownMenu(false);
        }}>
        # Assignment 4
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setGeneral(!general);
          setDropDownMenu(false);
        }}>
        # General
        </IconButton><br/>
        <IconButton className={classes.dropDownChannels} onClick={(event) => {
          setAddChannel(!addChannel);
          setDropDownMenu(false);
        }}>
        + Add Channel
        </IconButton><br/>
        <Typography variant="h6" className={classes.dropDownCategories}>
        ⓥ Direct Messages
        </Typography><br/>
      </div>
    </div>
  );
}

export default Workspaces;
