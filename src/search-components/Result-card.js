import React from 'react';


const ResultCard = ({ item, setSearchTerm, style }) => {
	return (
		<div className="result-card" style={style}>
			<img src={item.webformatURL} alt={item.id} />
		</div>
	)
}

export default ResultCard;