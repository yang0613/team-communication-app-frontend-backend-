import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles((theme) => ({
  fixed: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));
/**
 *
 * @return {BottomBar}
 */
function BottomBar() {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.fixed}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Messages" icon={<ChatIcon />} />
      <BottomNavigationAction label="Mentioned" icon={<AlternateEmailIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" icon={<PermIdentityIcon />} />
    </BottomNavigation>
  );
}

export default BottomBar;
