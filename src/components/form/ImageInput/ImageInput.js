import React from 'react';
import { Field } from 'formik';

const ImageInput = ({
    id, className, text
}) => {
    const getBase64Image = (file) => {
        var reader = new FileReader()
        
        reader.onload = function(base64) {
            localStorage["file"] = base64;
        }
        reader.readAsDataURL(file);
    };

    return (
        <label htmlFor={id} className={className}>
            <span className={`${className}_header`}>{text}</span>
            <input 
                id={id} 
                name={id} 
                type='file'
                
                onChange={(e) => getBase64Image(e.currentTarget.files[0])}    
            />
        </label>
    );
};

export default ImageInput;
