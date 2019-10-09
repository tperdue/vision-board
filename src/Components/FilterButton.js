import React from 'react';


const FilterButtons = () => {
    return (<div className="text-center">
                <div className="btn-group btn-group-sm">
                    <button className="filter-btn 
                    brightness-remove btn btn-info">-</button>
                    <button className="btn 
                    btn-secondary btn-disabled" disable>Brightness</button>
                    <button className="filter-btn 
                    brightness-add btn btn-info">+</button>
                </div>
            </div>)
}

export default FilterButtons;