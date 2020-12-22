import React from 'react';

const DateInput = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            {text}
            <input
                id={id}
                name={id}
                type='date'
            />
        </label>
    );
};

export default DateInput;