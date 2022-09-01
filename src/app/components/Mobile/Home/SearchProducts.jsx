import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchProducts({ setIsSearch, props }) {

    const [searchTxt, setSearchTxt] = useState('');
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const wrapperRef = useRef(null);

    let timeout;

    const debounce = function (func, delay) {
        clearTimeout(timeout);

        timeout = setTimeout(func, delay);
    }

    const search = () => {
        props.getAllProducts(`search=${searchTxt}`).then(res => {
            console.log(res)
        })
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSearchTxt(e.target.value)
        console.log('Search Props', props)

        debounce(search, 1000);
    }


    return (
        <div className='search-box' ref={wrapperRef}>
            <header>
                <div className="back-links">
                    <button onClick={() => setIsSearch(false)} >
                        <img src="/images/back.svg" className="img-fluid" alt="" />
                    </button>
                </div>
                <div className="inner-header">
                    <input onChange={(e) => handleOnChange(e)} placeholder='Search...' />
                    {
                        display && (
                            <div>

                            </div>
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default SearchProducts