import React from 'react';

const TextInput = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            {text}
            <input
                id={id}
                name={id}
                type='text'
            />
        </label>
    );
};

export default TextInput;