import React from 'react';

const DateInput = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <input
                id={id}
                name={id}
                type='date'
            />
        </label>
    );
};

export default DateInput;