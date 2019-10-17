import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';




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
            ctx.font = "40px Courier"
            ctx.fillText('hi', 210, 75)
        }
    }

    render () {
        this.img.src = this.props.url;
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
                <GridListTile key={1}>
                   
                    }
                />
          </GridListTile>
            </div>
        )

    }
}

export default Canvas;