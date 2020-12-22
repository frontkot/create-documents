import React from 'react';
import './Button.scss';

const Button = ({
    textContent, className
}) => (
    <button className={className}>{textContent}</button>
);

export default Button;