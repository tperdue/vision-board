import React from 'react';
import './CSS/App.css';
import TemplateContainer from './Containers/TemplateContainer';
import Sidebar from './Components/Sidebar';



function App(props) {
  return (
    <div className="App">
      { props.canvases.some(canvas=>canvas.selected) ? 
      <Sidebar/> : null }
      <TemplateContainer/>
    </div>
  );
}

export default App;
