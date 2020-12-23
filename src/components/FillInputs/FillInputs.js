import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../form/TextInput/TextInput';
import SubmitButton from '../form/SubmitButton/SubmitButton';
import InfoLabel from '../form/InfoLabel/InfoLabel';
import './FillInputs.scss';
import TextArea from '../form/TextArea/TextArea';
import DateInput from '../form/DateInput/DateInput';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getIsAct, getIsInvoice, getIsPayment } from '../../store/inputData/selectors';
import { updateData, deleteData } from '../../store/inputData/actions';
import { toggleIsAct, toggleIsInvoice, toggleIsPayment } from '../../store/inputData/actions';


const FillInputs = () => {
    const history = useHistory();
    
    const data = useSelector(getData);
    const isAct = useSelector(getIsAct);
    const isInvoice = useSelector(getIsInvoice);
    const isPayment = useSelector(getIsPayment);
    const dispatch = useDispatch();

    const submitForm = (values) => {
        dispatch(updateData(values));
        history.push('/preview');
    }

    const clearForm = () => {
        dispatch(deleteData());
        window.location.reload();
    }
    
    return (
        <>
            <Link to='/' className='go-button'>Вернуться на стартовую страницу</Link>
            <button className='clear-form_button' onClick={clearForm}>Очистить форму</button>
            <div className='form-header'>
                <InfoLabel text='Выберите, какие документы вам требуются' className='form-info_label' />
                <label className={isAct ? 'checkbox-label checkbox-label_active' : 'checkbox-label'}>
                    <span>Акт выполненых работ</span>
                    <input type='checkbox' checked={isAct} onChange={() => dispatch(toggleIsAct(!isAct))} />
                </label>
                <label className={isInvoice ? 'checkbox-label checkbox-label_active' : 'checkbox-label'}>
                    <span>Счет-фактура</span>
                    <input type='checkbox' checked={isInvoice} onChange={() => dispatch(toggleIsInvoice(!isInvoice))} />
                </label>
                <label className={isPayment ? 'checkbox-label checkbox-label_active' : 'checkbox-label'}>
                    <span>Счет на оплату</span>
                    <input type='checkbox' checked={isPayment} onChange={() => dispatch(toggleIsPayment(!isPayment))} />
                </label>
            </div>

            <Formik
                initialValues={data}
                // validate={validate}
                onSubmit={submitForm}
            >
                {({ errors, touched }) => (
                    <Form className='form-container'>
                        <InfoLabel text='Заполните нужны поля ввода' className='form-info_label' />

                        {/* Общие поля */}
                        <div className='form-general_info'>
                            <div className='form-header'>
                                <InfoLabel text='Общие поля' className='form-info_label' />
                            </div>
                            <InfoLabel text='Заказчик' className='form-info_label' />
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Заказчик' id='client'/>
                                <TextInput className='form-text_input' text='ИНН/БИН Заказчика' id='clientTaxNumber'/>
                            </div>

                            <InfoLabel text='Исполнитель' className='form-info_label' />
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Исполнитель' id='executor'/>
                                <TextInput className='form-text_input' text='ИНН/БИН Исполнителя' id='executorTaxNumber'/>
                            </div>

                            <InfoLabel text='Договор' className='form-info_label' />
                            <div className='form-block'>
                            <TextInput className='form-text_input' text='Договор (контракт)' id='contract'/>
                            </div>
                        </div>

                        <InfoLabel text='Таблица работ(услуг) и их стоимости' className='form-info_label' />
                            <div className='form-block'>
                                <TextArea className='form-text_area' text='Наименование работ (услуг)' id='nameOfWorks'/>
                                <DateInput className='form-date_input' text='Дата выполнения работ' id='dateOfWorks'/>
                                <TextInput className='form-text_input' text='Единица измерения' id='measure'/>
                                <TextInput className='form-text_input' text='Количество' id='quantity'/>
                                <TextInput className='form-text_input' text='Цена за единицу' id='unitPrice'/>
                                <TextInput className='form-text_input' text='Стоимость' id='price'/>
                            </div>



                        {/* Акт */}
                        {isAct && 
                            <>
                                <div className='form-header'>
                                    <InfoLabel text='Поля для заполнения акта' className='form-info_label' />
                                </div>
                                <div className='form-act_info'>
                                    <div className='form-block'>
                                        <TextInput className='form-text_input' text='Номер акта' id='actNumber'/>
                                        <DateInput className='form-date_input' text='Дата составления атка' id='actDate'/>
                                    </div>
                                    <div className='form-block'>
                                    <TextArea className='form-text_area' text='Сведения об использовании запасов, полученных от заказчика' id='inventoryUsageInformation'/>
                                    </div>
                                    <InfoLabel text='Приложение' className='form-info_label' />
                                    <div className='form-block'>
                                        <TextInput className='form-text_input' text='Перечень документации на сколько страниц' id='numberOfPafes'/>
                                        <TextArea className='form-text_area' text='Перечень документов' id='documentsList'/>
                                    </div>
                                </div>

                            </>
                        }
                        

                        {/* Счет-фактура */}
                        {/* <TextInput className='form-text_input' text='Дата совершения оборота' id='dateOfOperation'/> */}

                        
                        
                        {/* Общие поля */}
                        <div className='form-general_info'>
                        <div className='form-header'>
                                <InfoLabel text='Блок подписи документа' className='form-info_label' />
                        </div>
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Сдал (должность исполнителя)' id='executerPosition'/>
                                <TextInput className='form-text_input' text='Подпись исполнителя' id='executerSignature'/>
                                <TextInput className='form-text_input' text='ФИО исполнителя(расшифровка подписи)' id='executerFullName'/>
                                <TextInput className='form-text_input' text='Принял (должность заказчика)' id='clientPosition'/>
                                <TextInput className='form-text_input' text='Подпись заказика' id='clientSignature'/>
                                <TextInput className='form-text_input' text='ФИО заказчика(расшифровка подписи)' id='clientFullName'/>
                                <DateInput className='form-date_input' text='Дата подписания' id='dateIfSigning'/>
                            </div>
                        </div>

                        {/* Счет на оплату */}


                        {/* <div className='form-block'></div>
                        <div className='form-block'></div>
                        <div className='form-block'></div> */}

                        <SubmitButton 
                            disabled={!isAct && !isInvoice && !isPayment} 
                            text='Перейти к предпросмотру документа/-ов' 
                            className='form-submit' 
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default FillInputs;