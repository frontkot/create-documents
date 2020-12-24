import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAct, getIsInvoice, getIsPayment } from '../../store/inputData/selectors';
import './DocumentsPreview.scss';

const DocumentsPreview = () => {
    const isAct = useSelector(getIsAct );
    const isInvoice = useSelector(getIsInvoice);
    const isPayment = useSelector(getIsPayment );

    return (
        <>  
            <div className='doc-preview'>
                <Link to='/filling' className='go-button'>Вернуться к редактированию документов</Link>

                {isAct &&
                    <Link to={'/act'} className='go-button'>
                        Перейти к предпросмотру акта выполненых работ
                    </Link>
                }
                {isInvoice &&
                    <Link to={'/invoice'} className='go-button'>
                        Перейти к предпросмотру счета-фактуры
                    </Link>
                }
                {isPayment &&
                    <Link to={'/payment'} className='go-button'>
                        Перейти к предпросмотру счета на оплату
                    </Link>
                }
            </div>
        </>
    );
};

export default DocumentsPreview;