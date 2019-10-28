import React, { Component } from 'react';




class Canvas extends Component {
    constructor(props) {
        super(props);
        //this.img = new Image();
    }

    componentDidMount() {
        //const canvas = this.refs.canvas
        //const ctx = canvas.getContext("2d")

        //axios.get(image url saved in state.then(img.onload))
        /*
        this.img.onload = () => {
            ctx.drawImage(this.img, 0, 0)
            // ctx.font = "40px Courier"
            // ctx.fillText('hi', 210, 75)
        }*/
    }

    render() {
        //this.img.src = this.props.url;

        let borderStyle = this.props.selected ? '2px solid #D65831' : '';
        let style = {
            height: this.props.height,
            width: this.props.width,
            border: borderStyle,
            backgroundColor: this.props.color,
            borderRadius: this.props.radius,
            // margin: this.props.margin,
            backgroundImage: `url("${this.props.url}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'

        }

        return (
            <div ref="canvas" style={style} onClick={this.props.clicked} ></div>
        )

    }
}

export default Canvas;