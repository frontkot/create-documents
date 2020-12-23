import React from 'react';
import { Field } from 'formik';

const TextArea = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <Field
                // className={className}
                // className={{touched.{id}} && errors.{id} ? 'form-error_warning' : ''}
                name={id}
                id={id}
                as='textarea'
                // {...getFieldProps('{id}')}
            />
            {/* {touched.{id} && errors.{id} ? <span className='form-error'>{errors.{id}}</span> : null} */}
        </label>
    );
};

export default TextArea;