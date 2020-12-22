import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../form/TextInput/TextInput';
import SubmitButton from '../form/SubmitButton/SubmitButton';
import InfoLabel from '../form/InfoLabel/InfoLabel';
import './Invoice.scss'
import TextArea from '../form/TextArea/TextArea';
import DateInput from '../form/DateInput/DateInput';
import { Link } from 'react-router-dom';

const Invoice = () => {
    return (
        <Formik
            // initialValues={initialValues}
            // validate={validate}
            // onSubmit={( values ) => {
            //         submitForm(values)
            //     }
            // }
        >
            {({ errors, touched }) => (
                <Form className='invoice-form'>
                <Link to='/choose-document'>Вернуться к выбору документа</Link>
                <InfoLabel text='Заполните следующие поля для формирования Счета-фактуры' className='invoice-info_label' />
                <TextInput className='invoice-text_input' text='Номер счет-фактуры' id='invoiceNumber'/>
                <DateInput className='invoice-date_input' text='Дата счет-фактуры' id='invoiceDate'/>
                <DateInput className='invoice-date_input' text='Дата совершения оборота' id='dateOfTurover'/>
                <TextInput className='invoice-text_input' text='Поставщик' id='provider'/>
                <TextInput className='invoice-text_input' text='Бин номер поставщика' id='provideraTaxNumber'/>

                <TextArea className='invoice-text_area' text='Адрес места поставщика' id=''/>


                </Form>
            )}
        </Formik>
    );
};

export default Invoice;