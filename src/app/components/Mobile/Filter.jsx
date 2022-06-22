import React from 'react'

function Filter() {
    return (
        <div className='filter-body'>
            <div className='delivery'>
                <div className='fast-delivery'>
                    Fast Delivery
                </div>
                <div className='normal-delivery'>
                    Normal
                </div>
            </div>
            <div className='price-range'>
                <input type="range" max={500} />
            </div>
            <div className="sizes">
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>2XL</li>
                </ul>
            </div>
            <div className='action-btns'>
                <button className='filter-btn'>Reset</button>
                <button className='filter-btn'>Save</button>
            </div>
        </div>
    )
}

export default Filter