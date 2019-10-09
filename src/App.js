import React from 'react';
import './CSS/App.css';
import Template from './Components/Template';
import { Widget } from "@uploadcare/react-widget";
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Template/>
    </div>
  );
}

export default App;
