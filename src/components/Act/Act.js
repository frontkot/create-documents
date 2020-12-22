import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../form/TextInput/TextInput';
import SubmitButton from '../form/SubmitButton/SubmitButton';
import InfoLabel from '../form/InfoLabel/InfoLabel';
import './Act.scss'
import TextArea from '../form/TextArea/TextArea';
import DateInput from '../form/DateInput/DateInput';
import { Link } from 'react-router-dom';

const Act = () => {
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
                <Form className='act-form'>
                    <Link to='/choose-document'>Вернуться к выбору документа</Link>
                    <InfoLabel text='Заполните следующие поля для формирования Акта выполненых работ' className='act-info_label' />
                    <TextInput className='act-text_input' text='Заказчик' id='client'/>
                    <TextInput className='act-text_input' text='ИНН/БИН Заказчика' id='clientTaxNumber'/>
                    <TextInput className='act-text_input' text='Исполнитель' id='executor'/>
                    <TextInput className='act-text_input' text='ИНН/БИН Исполнителя' id='executorTaxNumber'/>
                    <TextInput className='act-text_input' text='Договор (контракт)' id='contract'/>
                    <TextInput className='act-text_input' text='Номер договора' id='contractNumber'/>
                    <TextInput className='act-text_input' text='Дата составления' id='contractDate'/>
                    <TextArea className='act-text_area' text='Наименование работ (услуг)' id='nameOfWorks'/>
                    <DateInput className='act-date_input' text='Дата выполнения работ' id='dateOfWorks'/>
                    <TextArea className='act-text_area' text='Сведения об отчете' id='infoOfWorks'/>
                    <TextInput className='act-text_input' text='Единица измерения' id='measure'/>
                    <TextInput className='act-text_input' text='Количество' id='quantity'/>
                    <TextInput className='act-text_input' text='Цена за единицу' id='unitPrice'/>
                    <TextInput className='act-text_input' text='Стоимость' id='price'/>
                    <TextArea className='act-text_area' text='Сведения об использовании запасов, полученных от заказчика' id='infoAboutUse'/>
                    <TextInput className='act-text_input' text='Перечень документации на сколько страниц' id='numberOfPafes'/>
                    <TextArea className='act-text_area' text='Перечень документов' id='infoAboutUse'/>
                    <TextInput className='act-text_input' text='Сдал (должность исполнителя)' id='executerPosition'/>
                    <TextInput className='act-text_input' text='Подпись исполнителя' id='executerSignature'/>
                    <TextInput className='act-text_input' text='ФИО исполнителя(расшифровка подписи)' id='executerFullName'/>
                    <TextInput className='act-text_input' text='Принял (должность заказчика)' id='clientPosition'/>
                    <TextInput className='act-text_input' text='Подпись заказика' id='clientSignature'/>
                    <TextInput className='act-text_input' text='ФИО заказчика(расшифровка подписи)' id='clientFullName'/>
                    <DateInput className='act-date_input' text='Дата подписания' id='dateIfSigning'/>
                    <SubmitButton disabled={true} text='Перейти к предпросмотру документа' className='act-submit'/>
                </Form>
            )}
        </Formik>
    );
};

export default Act;