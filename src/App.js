import React from 'react';
import './CSS/App.css';
import TemplateContainer from './Containers/TemplateContainer';
import Sidebar from './Components/Sidebar';



function App(props) {
  return (
    <div className="row">
      <div className="sidebar"><Sidebar/></div>
      <div><TemplateContainer /></div>
    </div>
  );
}

export default App;
