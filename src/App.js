import React from 'react';
import './CSS/App.css';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from "@reach/router"
import AppBar from './tim-components/AppBar';
import ResponsiveDrawer from './tim-components/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './tim-components/Login';
import Content from './tim-components/Content';
import Home from './tim-components/Home';
import SearchPage from './tim-components/SearchPage';
import MaterialTemplate from './tim-components/MaterialTemplate';



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
  const Main = ({ chidlren }) => {
    return (
      <div className={classes.root} >
        <AppBar />
        <ResponsiveDrawer />
        <Content>

          {chidlren}

        </Content>
      </div>
    )
  }
  return (
    <Provider store={store}>

      <CssBaseline />
      <div className={classes.root} >
        <AppBar />
        <ResponsiveDrawer />
        <Content>

          <Router>
            <Home path="/" />
            <Login path="/login" />
            <SearchPage path="/search" />
            <MaterialTemplate path="/material-template" />

          </Router>

        </Content>
      </div>




    </Provider>
  );
}

export default App;