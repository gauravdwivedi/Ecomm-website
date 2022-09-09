import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchItem from './SearchItem';
import config from '../../../../config';

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


    const renderDropDown = () => {

        console.log('Rdnerd ropdown')
        const dropDownClass = display ? "show" : null
        console.log('CLass', dropDownClass)
        return (
            <ul className={`dropdown-content ${dropDownClass} `}>
                {options.map((result) => {
                    return (
                        <li><SearchItem item={result} url={config.IMG_END_POINT + result.images[0].url} /></li>
                    )
                })

                }
            </ul>
        )
    }


    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSearchTxt(e.target.value)
        console.log('Search Props', props)
        debounce(search, 1000);
    }


    const search = () => {

        if (searchTxt.length > 0) {
            props.searchProducts(`search=${searchTxt}`).then(res => {
                console.log(res[0])
                console.log(res[0]?.result?.list)

                if (res[0]?.result?.list) {
                    setDisplay(true)
                    setOptions(res[0]?.result?.list)
                }

            })
        } else {
            setDisplay(false);
            setOptions([]);
        }

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
                    <input id="search" onChange={(e) => handleOnChange(e)} placeholder='Search...' autoComplete='off' />

                </div>
            </header>
            {display && renderDropDown()}
        </div>
    )
}

export default SearchProducts