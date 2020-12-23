import React from 'react';

const TextInput = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <input
                id={id}
                name={id}
                type='text'
            />
        </label>
    );
};

export default TextInput;