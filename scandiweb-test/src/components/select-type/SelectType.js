import React from 'react';

const SelectType = ({setType, fur}) => {

    let onOption = (e) => {
        setType(e.target.value)
    }

    return (
        <select
            id='#productType'
            onChange={e => onOption(e)}
        >
            <option value=''>Type Switcher</option>
            <option value="dvd" disabled={fur}>DVD</option>
            <option value="furniture" disabled={fur}>Furniture</option>
            <option value="book" disabled={fur}>Book</option>
        </select>
    );
};

export default SelectType;