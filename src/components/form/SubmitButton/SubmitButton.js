import React from 'react';

const SubmitButton = ({
    text, disabled, className
}) => {
    return (
        <button 
            disabled={disabled}
            type='submit'
            className={className}
        >
            {text}
        </button>
    );
};

export default SubmitButton;