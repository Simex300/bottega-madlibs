import React from 'react';

const Input = (name, title, value, onChange) => {
    return (
        <div className="input">
            <input name={name} value={value} onChange={onChange}/>
            <label>{ title }</label>
        </div>
    )
}

export default Input;