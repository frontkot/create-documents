import React from 'react';

const TextArea = ({
    text, id, className
}) => {
    return (
        <label htmlFor={id} className={className}>
            {text}
            <textarea
                // className={className}
                // className={{touched.{id}} && errors.{id} ? 'form-error_warning' : ''}
                name={id}
                // {...getFieldProps('{id}')}
            />
            {/* {touched.{id} && errors.{id} ? <span className='form-error'>{errors.{id}}</span> : null} */}
        </label>
    );
};

export default TextArea;