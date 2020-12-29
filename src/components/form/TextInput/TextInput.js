import React from 'react';
import { Field } from 'formik';

const TextInput = ({
    text, id, className, placeholder
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <Field
                id={id}
                name={id}
                type='text'
                placeholder={placeholder}
                className={`${className}-area`}
                onChange={(e) => console.log(e.target.value)}
            />
        </label>
    );
};

export default TextInput;