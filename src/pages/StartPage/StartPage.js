import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteData } from '../../store/inputData/actions';
import './StartPage.scss';

const StartPage = () => {
    const dispatch = useDispatch();
    const oldInfo = JSON.parse(localStorage.getItem('data-info')) !== null; 
    const history = useHistory();

    const clearForm = (e) => {
        e.preventDefault()
        dispatch(deleteData());
        history.push('/filling');
    }

    return (
        <>
            <div className='start-page'>
                <Link to={'/filling'} className='start-page_link' onClick={(e) => clearForm(e)}>
                    Перейти к заполнению нового документа
                </Link>
                {oldInfo && <Link to={'/filling'} className='start-page_link'>
                    Использовать последние введенные данные
                </Link>}
            </div>
        </>
    );
}

export default StartPage;