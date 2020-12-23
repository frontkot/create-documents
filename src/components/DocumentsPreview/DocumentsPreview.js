import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAct, getIsInvoice, getIsPayment } from '../../store/inputData/selectors';

const DocumentsPreview = () => {
    const isAct = useSelector(getIsAct );
    const isInvoice = useSelector(getIsInvoice);
    const isPayment = useSelector(getIsPayment );

    return (
        <>
            {isAct &&
                <Link to={'/act'} className='preview-page'>
                    Перейти к предпросмотру акта выполненых работ
                </Link>
            }
            {isInvoice &&
                <Link to={'/invoice'} className='preview-page'>
                    Перейти к предпросмотру счета-фактуры
                </Link>
            }
            {isPayment &&
                <Link to={'/payment'} className='preview-page'>
                    Перейти к предпросмотру счета на оплату
                </Link>
            }
        </>
    );
};

export default DocumentsPreview;