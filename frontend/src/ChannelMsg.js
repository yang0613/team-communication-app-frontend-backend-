/* eslint-disable */
// base on https://material-ui.com/components/dialogs/
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
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

const fetchCM = (setCM, id) => {
  const item = localStorage.getItem('user');

  if (!item) {
    return;
  }
  const user = JSON.parse(item);
  let query = 'http://localhost:3010/v0/message/'+id;
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
      setCM(json);
    })
    .catch((error) => {
      setCM(error.toString());
    });
};
/**
 *
 * @return {ChannelMsg}
 */
export default function ChannelMsg({channel}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dropdownChannels, setDropdownChannels] = React.useState(true);
  const [name, setName] = React.useState('');
  const channels = JSON.parse(localStorage.getItem('channels'));
  const [CM, setCM] = React.useState([]);
  const handleClickOpen = (c, id) => {
    setOpen(true);
    setName(c);
    fetchCM(setCM, id);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setDropdownChannels(!dropdownChannels)} style={{cursor: 'pointer'}}>
        <ExpandMoreTwoToneIcon></ExpandMoreTwoToneIcon>
        <span>Channels</span>
      </div>
      <div style={{display: dropdownChannels ? '' : 'none'}}>
      {channel.map(c => <div onClick={() => handleClickOpen(c.name, c.channel_id)}
      className='list' key={c.channel_id}>#  {c.name}</div>)}
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
          {CM.map(c => 
          <ListItem button>
            <ListItemText primary={c.text} secondary={c.name} />
          </ListItem>
          )}
        </List>
      </Dialog>
    </div>
  );
}
