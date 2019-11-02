import React from 'react'




class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: 130,
            left: 390,
            content: ''
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        console.log(e.target.value)
        this.setState({
            content: e.target.value
        })
    }
    handleMouseMove(e) {
        e.preventDefault();
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        this.setState({top: this.instance.offsetTop - this.pos2, left: this.instance.offsetLeft - this.pos1});
    }
    handleMouseUp(e) {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    handleMouseDown(e) {
        e.preventDefault();
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.handleMouseUp;
        document.onmousemove = this.handleMouseMove;
    }
    render() {
        return(
            <div id="myDiv"  
                ref={(el) => this.instance = el}
                style={{position: 'absolute',
                zIndex: "9",
                backgroundColor: "transparent",
                textAlign: "center",
                border: "none",
                top: this.state.top + 'px',
                left: this.state.left + 'px'
            }}>
                <input className = "input"
                    type = 'text' 
                    onChange = {this.handleChange} 
                    value ={this.state.content}
                    style={{padding: "10px",
                    zIndex: "10",backgroundColor: "transparent",border: "none", 
                    cursor: "move",
                    top: this.state.top + 'px',
                    left: this.state.left + 'px'}}placeholder = "Enter Text Here + Drag"></input>
                
                <div onMouseDown={this.handleMouseDown}
                    ref={(el) => this.instance = el}
                    style={{padding: "10px",
                    zIndex: "10",
                    cursor: "move",
                    top: this.state.top + 'px',
                    left: this.state.left + 'px'}}>
                </div>
            </div>
         ) }
        
    
}
export default TextInput;
