import React from 'react';

const InfoLabel = ({
    text, className
}) => (
    <label className={className}>
        {text}
    </label>
);

export default InfoLabel;