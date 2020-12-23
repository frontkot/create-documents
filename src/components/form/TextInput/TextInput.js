import React from 'react';
import { Field } from 'formik';

const TextInput = ({
    text, id, className, defaultValue
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <Field
                id={id}
                name={id}
                type='text'
                defaultValue={defaultValue}
            />
        </label>
    );
};

export default TextInput;