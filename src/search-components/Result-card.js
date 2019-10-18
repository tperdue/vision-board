import React from 'react';


const ResultCard = ( {item, setSearchTerm, selectResult, style} ) => { 
	return(
		<div className="result-card"style={style}>
			<img onClick={() => {selectResult(item)}} src={item.webformatURL} alt={item.id} />
		</div>
	)
}

export default ResultCard;
