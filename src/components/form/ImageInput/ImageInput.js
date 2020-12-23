import React from 'react';

const ImageInput = () => {
    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <input
                id={id}
                name={id}
                type='image'
                // src={}
            />
        </label>
    );
};

export default ImageInput;