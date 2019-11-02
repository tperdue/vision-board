import React from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import { changeBgColor } from '../redux-store/reducers/color-picker';
import { thisExpression } from '@babel/types';



class ColorPicker extends React.Component {

	constructor(props) {
		super(props)

	}

	handleColorChange = (color) => {
		this.props.handleChangeColor(color.hex);
	}

	render() {
		return (
			<div>
				<SketchPicker
					width={180}
					disableAlpha={true}
					onChangeComplete={this.handleColorChange}
					presetColors={
						['#FF0000', , '#FF9B00',
							'#FFFF00', '#00FF00',
							'#00FFFF', '#0000FF',
							'#FF00FF', '#000000',
							'#3c4245', '#FFFFFF']} />

			</div>
		)
	}

}


function mapStateToProps(state) {

	return {

	}
}

const mapDispatchToProps = {
	handleChangeColor: changeBgColor,
};


// connect() will automatically bind dispatch to your actions 
// if they are passed in as an object of function names.
export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);