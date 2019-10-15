import React, { Component } from 'react';




class Canvas extends Component { 
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image

        //axios.get(image url saved in state.then(img.onload))

        img.onload = () => {
            ctx.drawImage(img, 0, 0)
            ctx.font = "40px Courier"
            ctx.fillText('hi', 210, 75)
        }
    }

    render () {
        let style = {
            height: this.props.height,
            width: this.props.width,
            border: `2px solid ${this.props.selected ? 'white': 'transparent'}`,
            backgroundColor: this.props.color,
            borderRadius: this.props.radius,
            margin: this.props.margin
        }

        return (
            <div>
                <canvas ref="canvas" style={style} onClick={this.props.clicked} ></canvas>
                <img ref="image" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1108099%2Fpexels-photo-1108099.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&docid=NzcFCDirz3vE7M&tbnid=oIyUVmRYtXjk-M%3A&vet=10ahUKEwivjJCCmpjlAhVxmeAKHeSQDEsQMwh9KAMwAw..i&w=500&h=375&bih=681&biw=1280&q=dog%20images&ved=0ahUKEwivjJCCmpjlAhVxmeAKHeSQDEsQMwh9KAMwAw&iact=mrc&uact=8" className="hidden" />
            </div>
        )

    }
}

export default Canvas;