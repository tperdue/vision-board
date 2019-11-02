import React from 'react';
import ReactDOM from 'react-dom';
// import TextInput from './TextInput';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }
  myChangeHandler = (event) => {
    this.setState({content: event.target.value});
  }
  render() {
    return (
      <form>
      
      <h1><p>   Enter Text Below </p></h1>
        <input type='text' style ={{backgroundColor: "transparent", placeHolder: "text", color: "white"}}  onChange={this.myChangeHandler}placeholder = "Enter text Here!!!"/>
      <h1> {this.state.content}</h1>
      </form>
    );
  }
}
export default MyForm;