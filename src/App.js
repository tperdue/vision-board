import React from 'react';
import './CSS/App.css';
import TemplateContainer from './Containers/TemplateContainer';
import Sidebar from './Components/Sidebar';



function App(props) {
  return (
    <div className="grid-container">
      <Sidebar/>
      <TemplateContainer />
    </div>
  );
}

export default App;
