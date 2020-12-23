import React from 'react';
import { Field } from 'formik';

const ImageInput = ({
    id, className, src
}) => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <Field
                id={id}
                name={id}
                type='image'
                // src={src}
            />
        </label>
    );
};

export default ImageInput;