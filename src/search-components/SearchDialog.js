import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Results from '../search-components/Results';
import SearchBar from '../search-components/Search-bar';
import { connect } from 'react-redux'
import { closeDialog, openDialog } from '../redux-store/actions/full-screen-dialog';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  outlinedPrimary: {
    color: 'white',
    borderColor: 'white'

  },
  colorPrimary: {
    backgroundColor: '#3c4245'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = (props) => {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.openDialog();
  };

  const handleClose = () => {
    props.closeDialog();
  };

  const fullScreenDialogState = props.fullScreenDialog.open;
  return (
    <div>
      <SearchIcon/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.outlinedPrimary}>
         Search web...
      </Button>
      <Dialog fullScreen open={fullScreenDialogState} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={[classes.appBar, classes.colorPrimary].join(' ')}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Search Web For Images
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <SearchBar />
          <Results onSelect={(item) => { console.log("Selected", item) }} />
        </List>
      </Dialog>
    </div>
  );
}



const mapStateToProps = (state) => {
  const { fullScreenDialog } = state;
  return { fullScreenDialog }
}

const mapDispatchToPros = { openDialog, closeDialog };


export default connect(mapStateToProps, mapDispatchToPros)(FullScreenDialog)