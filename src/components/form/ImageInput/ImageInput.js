import React from 'react';

const ImageInput = () => {
    return (
        <label htmlFor={id} className={className}>
            {text}
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