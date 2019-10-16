import React from 'react';

const Tags = ( {tags, setSearchTerm} ) => {
	const tagsArray = tags.split(',');
	return (
		<div className="text-item">
		{tagsArray.map(tag => {
			return <button 
					key={tag}
					className="tag" 
					onClick={() => setSearchTerm(tag)}>{tag}
					</button>
		})}
		</div>
	)
}

export default Tags;