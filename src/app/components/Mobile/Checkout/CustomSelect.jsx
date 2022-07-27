import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Modal from '../Modal';

function CustomSelect(props) {

    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(-1);
    const [optionList, setOptionList] = useState([]);
    // const optionList = [
    //     "Option 1",
    //     "Option 2",
    //     "Option 3",
    //     "Option 4",
    //     "Option 5"
    // ];


    useEffect(() => {
        console.log(props)
        if (props?.data) {
            setOptionList(props?.data)
        }
    })

    const toggleOptions = () => {
        setIsOptionOpen(!isOptionOpen);
    }

    const setSelectedThenCloseDropdown = (index) => {
        setSelectedOption(index);
        setIsOptionOpen(false);
        props.callingFunction(optionList[index].id, optionList[index].name, props.dType);
    }

    return (
        <div className='select-wrapper'>
            <div className="select-container">
                <button
                    type='button'
                    aria-haspopup="listbox"
                    aria-expanded={isOptionOpen}
                    className={isOptionOpen ? "expanded" : ""}
                    onClick={toggleOptions} >
                    {optionList[selectedOption] ? optionList[selectedOption].name : props?.label}
                </button>
                <ul
                    className={`options ${isOptionOpen ? "show" : ""}`}
                    role="listbox"
                    aria-activedescendant={optionList && optionList[selectedOption]}
                    tabIndex={-1} >
                    {optionList && optionList.map((option, index) => (
                        <li
                            id={option}
                            role="option"
                            aria-selected={selectedOption == index}
                            tabIndex={0}
                            onClick={() => {
                                setSelectedThenCloseDropdown(index);
                            }} >
                            {option.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default CustomSelect