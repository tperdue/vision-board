import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux-store/reducers';
import middlewares from './redux-store/middlewares';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './tim-components/AppBar';
import ResponsiveDrawer from './tim-components/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Login from './tim-components/Login';

const store = createStore(reducer, applyMiddleware(...middlewares));
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
        <Login>
          <Button variant="contained" color="primary" className={classes.button}>
            Primary
      </Button>

        </Login>




      </div>



    </Provider>
  );
}

export default App;
