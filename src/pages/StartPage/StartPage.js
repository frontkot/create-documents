import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => (
    <Link to={'/filling'} className='start-page'>
        Перейти к заполнению документа
    </Link>
);

export default StartPage;