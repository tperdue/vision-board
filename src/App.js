import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux-store/reducers';
import { makeStyles } from '@material-ui/core/styles';
import initialState from './redux-store/initialState';
import AppBar from './tim-components/AppBar';
import ResponsiveDrawer from './tim-components/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const store = createStore(reducer, initialState);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>

      <CssBaseline />
      <div className={classes.root}>
        <AppBar />
        <ResponsiveDrawer />
        <Container>
          <Button variant="contained" color="primary" className={classes.button}>
            Primary
      </Button>

        </Container>




      </div>



    </Provider>
  );
}

export default App;
