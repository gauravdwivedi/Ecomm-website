import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchProducts({ setIsSearch }) {

    const [searchTxt, setSearchTxt] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSearchTxt(e.target.value)
    }

    return (
        <div className='search-box'>
            <header>
                <div className="back-links">
                    <button onClick={() => setIsSearch(false)} >
                        <img src="/images/back-black.svg" className="img-fluid" alt="" />
                    </button>
                </div>
                <div className="inner-header">
                    <input onChange={(e) => handleOnChange(e)} />
                </div>
            </header>
        </div>
    )
}

export default SearchProducts