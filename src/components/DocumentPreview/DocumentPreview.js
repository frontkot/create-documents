import React from 'react';
import { Link } from 'react-router-dom';
// import './DocumentPrview.scss';

const DocumentPreview = ({
    className, textContent, link
}) => (
    <Link to={link} className={className}>
        {textContent}
    </Link>
);

export default DocumentPreview;