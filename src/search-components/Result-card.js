import React from 'react';
import '../CSS/Results.css'
import { connect } from 'react-redux';
import { closeDialog } from '../redux-store/actions/full-screen-dialog';


const ResultCard = ({ item, setSearchTerm, selectResult, closeDialog }) => {
	const style = {

		width: '100%',
		backgroundImage: `url("${item.webformatURL}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center'
	}

	const handleClick = () => {
		selectResult(item);
		closeDialog();

	}
	return (
		<div
			className="result-card"
			onClick={handleClick}
			style={style}
		>

		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return ownProps;
}

const mapDispatchToProps = {
	closeDialog
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
