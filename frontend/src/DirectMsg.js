/* eslint-disable */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const fetchDM = (setDM) => {
  const item = localStorage.getItem('user');

  if (!item) {
    return;
  }
  const user = JSON.parse(item);
  let query = null;
  if (user.name = 'molly') {
    query = 'http://localhost:3010/v0/dm/5f1c95b1-50e0-4904-bd79-b2e155a318c1';
  } else {
    query = 'http://localhost:3010/v0/dm/bf7187d8-155a-4de3-a745-65873b213e36';
  }
  const bearerToken = user ? user.accessToken : '';
    fetch(query, {
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
      setDM(json);
    })
    .catch((error) => {
      setDM(error.toString());
    });
};

/**
 *
 * @return {DirectMsg}
 */
function DirectMsg() {
  const classes = useStyles();
  const [DM, setDM] = React.useState([]);
  // // Drop down menu for DM
  const [dropdownDM, setDropdownDM] = React.useState(true);
  React.useEffect(() => {
    fetchDM(setDM);
  }, []);
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (d) => {
    setOpen(true);
    setName(d);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='directMsg'>
      <div onClick={() => setDropdownDM(!dropdownDM)}
      style={{cursor: 'pointer'}}>
        <ExpandMoreTwoToneIcon></ExpandMoreTwoToneIcon>
        <span>Direct Messages</span>
      </div>
      <div style={{display: dropdownDM ? '' : 'none'}}>
      {DM.map((d) => <div onClick={() => handleClickOpen(d.name)}
      className='list' key={d.to_user_id}>
        <AccountCircleIcon />{d.name}</div>)}
      </div>
      <Dialog fullScreen open={open}
      onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit"
            onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {DM.map((d) => <ListItem button>
            <ListItemText primary={d.message} secondary={d.time} third={'hi'}/>
          </ListItem>)}
        </List>
        
        
      </Dialog>
    </div>
  );
}

export default DirectMsg;
