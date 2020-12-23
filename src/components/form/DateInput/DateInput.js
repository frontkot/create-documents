import React from 'react';
import { Field } from 'formik';

const DateInput = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <Field
                id={id}
                name={id}
                type='date'
            />
        </label>
    );
};

export default DateInput;