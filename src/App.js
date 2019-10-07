import React from 'react';
import { firestore } from './configs/firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux-store/reducers';
import initialState from './redux-store/initialState';
import AppBar from './tim-components/AppBar';
import ResponsiveDrawer from './tim-components/ResponsiveDrawer';

const store = createStore(reducer, initialState);


function App() {

  return (
    <Provider store={store}>

      <AppBar />
      <ResponsiveDrawer />

    </Provider>
  );
}

export default App;
