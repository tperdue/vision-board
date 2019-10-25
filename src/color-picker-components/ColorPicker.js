import React from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';



class ColorPicker extends React.Component {

	constructor(props) {
		super(props)


	}


	render() {
		return (
			<div>
				Frame Color
				<SketchPicker 
					width={180} 
					disableAlpha={true}
					presetColors={
						['#FF0000', ,'#FF9B00',
						'#FFFF00', '#00FF00', 
						'#00FFFF', '#0000FF', 
						'#FF00FF',  '#000000', 
						'#9B9B9B', '#FFFFFF']} />

			</div>
		)
	}

}


function mapStateToProps(state) {
	console.log('STATE', state);
	return {

	}
}


// connect() will automatically bind dispatch to your actions 
// if they are passed in as an object of function names.
export default connect(mapStateToProps)(ColorPicker);