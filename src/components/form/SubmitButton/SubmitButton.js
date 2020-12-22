import React from 'react';

const SubmitButton = ({
    text, disabled, className
}) => {
    return (
        <button 
            disabled={disabled}
            type='submit'
            className={className}
            // className={Object.keys(formik.errors).length === 0 && formik.values.firstName.length !== 0 ? 'form-button' : 'form-button form-button_disabled'} 
            // disabled={Object.keys(formik.errors).length !== 0 || formik.values.firstName.length === 0}
        >
            {text}
        </button>
    );
};

export default SubmitButton;