import React from 'react';


const FilterButtons = (props) => {
    return (<div>
                <div className="text-center">
                    <div className="btn-group btn-group-sm">
                        <button className="filter-btn 
                        brightness-remove btn btn-info">-</button>
                        <button className="btn 
                        btn-secondary btn-disabled" disable>Brightness</button>
                        <button className="filter-btn 
                        brightness-add btn btn-info">+</button>
                    </div>
                </div>
                <div className="text-center">
                    <div className="btn-group btn-group-sm">
                        <button className="filter-btn 
                        contrast-remove btn btn-info">-</button>
                        <button className="btn 
                        btn-secondary btn-disabled" disable>Contrast</button>
                        <button className="filter-btn 
                        contrast-add btn btn-info">+</button>
                    </div>
                </div>
                <div className="text-center">
                    <div className="btn-group btn-group-sm">
                        <button className="filter-btn 
                        Saturation-remove btn btn-info">-</button>
                        <button className="btn 
                        btn-secondary btn-disabled" disable>Saturation</button>
                        <button className="filter-btn 
                        Saturation-add btn btn-info">+</button>
                    </div>
                </div>
                <div className="text-center">
                    <div className="btn-group btn-group-sm">
                        <button className="filter-btn 
                        Vibrance-remove btn btn-info">-</button>
                        <button className="btn 
                        btn-secondary btn-disabled" disable>Vibrance</button>
                        <button className="filter-btn 
                        Vibrance-add btn btn-info">+</button>
                    </div>
                </div>
            </div>)
}

export default FilterButtons;