import React, { Component } from 'react';




class Canvas extends Component {
    constructor(props) {
        super(props);
        this.img = new Image();
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        //axios.get(image url saved in state.then(img.onload))

        this.img.onload = () => {
            ctx.drawImage(this.img, 0, 0)
            // ctx.font = "40px Courier"
            // ctx.fillText('hi', 210, 75)
        }
    }

    render () {
        this.img.src = this.props.url;
        let style = {
            height: this.props.height,
            width: this.props.width,
            border: `2px solid ${this.props.selected ? '#D65831': 'transparent'}`,
            backgroundColor: this.props.color,
            borderRadius: this.props.radius,
            margin: this.props.margin
        }

        return (
            <canvas ref="canvas" style={style} onClick={this.props.clicked} ></canvas>
        )

    }
}

export default Canvas;