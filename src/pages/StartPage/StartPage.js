import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => (
    <Link to={'/choose-document'} className='start-page'>
        Перейти к выбору документа
    </Link>
);

export default StartPage;