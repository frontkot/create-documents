import React from 'react';
import DocumentPreview from '../../components/DocumentPreview/DocumentPreview'

const ChooseDoc = () => {
    return (
        <>
            <DocumentPreview textContent='Акт выполненых работ' link={'/act'} className='doc-review' />
            <DocumentPreview textContent='Счет на оплату' link={'/payment'} className='doc-review' />
            <DocumentPreview textContent='Счет-фактура' link={'/invoice'} className='doc-review' />
        </>
    );
};

export default ChooseDoc;