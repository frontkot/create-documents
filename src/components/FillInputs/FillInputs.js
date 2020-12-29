import React, { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import TextInput from '../form/TextInput/TextInput';
import SubmitButton from '../form/SubmitButton/SubmitButton';
import InfoLabel from '../form/InfoLabel/InfoLabel';
import './FillInputs.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getIsAct, getIsInvoice, getIsPayment } from '../../store/inputData/selectors';
import { updateData, deleteData } from '../../store/inputData/actions';
import { toggleIsAct, toggleIsInvoice, toggleIsPayment } from '../../store/inputData/actions';
import ImageInput from '../form/ImageInput/ImageInput';

const FillInputs = () => {
    const dataFromDb = useSelector(getData);
    const [data, setData] = useState(dataFromDb)
    const history = useHistory();
    const isAct = useSelector(getIsAct);
    const isInvoice = useSelector(getIsInvoice);
    const isPayment = useSelector(getIsPayment);
    const dispatch = useDispatch();  
    const [isSignature, setIsSignature] = useState(false);
    const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);
    
    const emptyItem = () => (
        {
            item: '',
            nameOfGoods: '',
            dateOfWorks: '',
            measure: '',
            quantity: '',
            unitPrice: '',
            VATRate: '',
            exciseRate: '',
        }
    );

    const submitForm = (values) => {
        dispatch(updateData(values));
        history.push('/preview');
    }

    const clearForm = () => {
        dispatch(deleteData());
        setData(dataFromDb);
        window.location.reload();
    }

    
    return (
        <>
            <div className='form-button_block'>
                <Link to='/' className='go-button'>Вернуться на стартовую страницу</Link>
                <button className='clear-form_button' onClick={clearForm}>Очистить форму</button>
            </div>
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
                {({ errors, touched, values }) => (
                    <Form className='form-container'>
                        <InfoLabel text='Заполните нужныe поля ввода' className='form-info_label' />

                        <div className='form-general_info'>
                            {isAct && 
                                <div className='form-block'>
                                    <TextInput className='form-text_input' text='Номер акта' id='actNumber'/>
                                    <TextInput className='form-text_input' text='Дата составления акта' id='actDate'/>
                                </div>
                            }
                            {isInvoice && 
                                <div className='form-block'>
                                        <TextInput className='form-text_input' text='Номер счета-фактуры' id='invoiceNumber'/>
                                        <TextInput className='form-text_input' text='Дата счета-фактуры' id='invoiceDate'/>
                                        <TextInput className='form-text_input' text='Дата совершения процедуры' id='procedureDate'/>
                                </div>
                            }
                            {isPayment && 
                                <div className='form-block'>
                                        <TextInput className='form-text_input' text='Номер счета на оплату' id='paymentNumber'/>
                                        <TextInput className='form-text_input' text='Дата счета на оплату' id='paymentDate'/>
                                </div>
                            }
                        </div>

                        {/* Общие поля */}
                        <div className='form-general_info'>
                            {/* <div className='form-header'>
                                <InfoLabel text='Общие поля' className='form-info_label' />
                            </div> */}
                            <InfoLabel text='Заказчик/Покупатель' className='form-info_label' />
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Заказчик/Покупатель' id='client'/>
                                <TextInput className='form-text_input' text='БИН Заказчика/Покупателя' id='clientBINNumber'/>



                                {(isInvoice || isPayment) &&
                                    <>
                                        <TextInput className='form-text_input' text='Адрес Поупателя/Получателя' id='clientAdress'/>
                                        <TextInput className='form-text_input' text='Банк получателя' id='clientBank'/>
                                        <TextInput className='form-text_input' text='ИИК Заказчика/Покупателя' id='clientIIKNumber'/>
                                        <TextInput className='form-text_input' text='БИКбанка' id='clientBIKBank'/>
                                    </>
                                }

                            </div>

                            <InfoLabel text='Исполнитель/Поставщик' className='form-info_label' />
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Исполнитель/Поставщик' id='executor'/>
                                <TextInput className='form-text_input' text='БИН Исполнителя/Поставщика' id='executorBINNumber'/>
                                {(isPayment || isInvoice) &&
                                    <>
                                        <TextInput className='form-text_input' text='Адрес Исполнителя/Поставщика' id='executorAdress'/>
                                    </>
                                }
                                {(isPayment || isInvoice) &&
                                    <>
                                        <TextInput className='form-text_input' text='ИИК бенефициара (исполнителя)' id='executorIIK'/>
                                    </>
                                }
                                {isInvoice && 
                                        <TextInput className='form-text_input' text='Банк бенефициара (исполнителя)' id='executorBank'/>
                                }
                                {isPayment &&
                                    <>
                                    {/* <div className='form-block'> */}
                                        {/* <TextInput className='form-text_input' text='Бенефициар' id='beneficiary'/>  Одно и то же, что и Исполнитель*/}
                                        {/* <TextInput className='form-text_input' text='БИН бенефициара' id='beneficiaryTaxNumber'/>  Бин ИСПОЛНИТЕЛЯ*/}
                                    <TextInput className='form-text_input' text='Кбе бенефициара (исполнителя)' id='executorKbe'/>
                                    <TextInput className='form-text_input' text='БИК Банка бенефициара (исполнителя)' id='executorBankBIK'/>
                                    <TextInput className='form-text_input' text='Код заключения платежа банка бенефициара (исполнителя)' id='executorBankCode'/>
                                    {/* </div> */}
                                    </>
                                }
                            </div>
                            <InfoLabel text='Договор' className='form-info_label' />
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Договор (контракт)' id='contract'/>
                                {(isPayment || isInvoice) &&
                                    <>
                                        <TextInput className='form-text_input' text='Дата заключения договора (контракта)' id='contractDate'/>
                                        <TextInput className='form-text_input' text='Уловия оплаты по договору (контракту)' id='contractСonditions'/>
                                    </>
                                }
                            </div>

                        </div>
                        {/* Таблица */}
                        <div className='form-header'>
                            <InfoLabel text='Таблица товаров и услуг' className='form-info_label' />
                        </div>
                        <FieldArray 
                            name='tableInfo'>
                            {arrayHelpers => (
                                <>
                                    {values.tableInfo.length !==0 ? values.tableInfo.map((item, index) => (
                                            <div className='form-table_item' id={`tableData[${index}].item`} key={index}>
                                                <InfoLabel text={`${index+1} товар`} className='form-info_label' />
                                                <div className='form-table_block'>
                                                    <TextInput className='form-text_input' text='Наименование товаров (работ, услуг)' id={`tableInfo[${index}].nameOfGoods`}/>
                                                    {isPayment &&
                                                        <TextInput className='form-text_input' text='Код товара' id={`tableInfo[${index}].productCode`}/>
                                                    }
                                                    {isAct && 
                                                        <TextInput className='form-text_input' text='Дата выполнения работ' id={`tableInfo[${index}].dateOfWorks`}/>
                                                    }
                                                    <TextInput className='form-text_input' text='Единица измерения' id={`tableInfo[${index}].measure`} placeholder='ед./шт.'/>
                                                    <TextInput className='form-text_input' text='Количество товаров' id={`tableInfo[${index}].quantity`} />
                                                    <TextInput className='form-text_input' text='Цена за единицу' id={`tableInfo[${index}].unitPrice`}/>
                                                    {(isInvoice || isPayment)&&
                                                        <>
                                                        {/* <TextInput className='form-text_input' text='Стоимость товаров без НДС' id={`[${index}].withoutVAT`}/> */}
                                                        <TextInput className='form-text_input' text='Ставка НДС' id={`tableInfo[${index}].VATRate`}/>
                                                        {/* <TextInput className='form-text_input' text='Сумма НДС' id={`tableInfo[${index}].VATTax`}/> */}
                                                        {isInvoice &&
                                                            <TextInput className='form-text_input' text='Ставка акциза' id={`tableInfo[${index}].exciseRate`}/>
                                                        }
                                                        {/* <TextInput className='form-text_input' text='Сумма акциза' id={`tableInfo[${index}].exciseTax`}/> */}
                                                        </>
                                                    }
                                                    {/* <TextInput className='form-text_input' text='Стоимость' id={`tableInfo[${index}].price`}/>  */}
                                                </div>
                                                <button className='delete-item' type="button" onClick={() => arrayHelpers.remove(index)}>
                                                    удалить
                                                </button>
                                            </div>
                                    ))
                                    : null
                                    }
                                    <button className='add-item' type='button' onClick={() => arrayHelpers.push(emptyItem)}>
                                        Добавить товар(услугу)
                                    </button>
                                </>
                            )}
                        </FieldArray>

                        {/* Счет на оплату */}
                        <div className='form-header'>
                            <>
                                <InfoLabel text='Доп инфо для заполнения документов' className='form-info_label' />
                                <button className='is-open' onClick={(e) => {e.preventDefault();setIsAdditionalInfo(!isAdditionalInfo)}}>{isAdditionalInfo ? 'Свернуть' : 'Развернуть'}</button>
                            </>
                        </div>
                        {isAdditionalInfo &&
                            <>
                                {isInvoice &&
                                    <>
                                        <InfoLabel text='Доставка товара' className='form-info_label' />
                                        <div className='form-block'>
                                            <TextInput className='form-text_input' text='Пункт назначения' id='destination'/>
                                            <TextInput className='form-text_input' text='Поставка по довренности' id='proxy'/>
                                            <TextInput className='form-text_input' text='Способ отправления' id='departureMethod'/>
                                            <TextInput className='form-text_input' text='Товарно-транспортная накладная' id='CMR'/>
                                            {/* <TextInput className='form-text_input' text='Грузоотправитель' id='shipper'/> Брать инфо из Исполнителя! */}
                                            {/* <TextInput className='form-text_input' text='Грузополучатель' id='consignee'/>  Брать инфо из Заказчика!*/}
                                        </div>
                                    </>
                                }

                                {isPayment &&
                                    <>
                                        <InfoLabel text='Итоговая инфо для счета на оплату' className='form-info_label' />
                                        <div className='form-block'>
                                            <TextInput className='form-text_input' text='Итого' id='totalPayableForAll' value />
                                            {/* <TextInput className='form-text_input' text='В том числе НДС' id='includingVAT' value /> */}
                                            {/* <TextInput className='form-text_input' text='Всего наименований' id='totalItems' value /> */}
                                            {/* <TextInput className='form-text_input' text='На сумму' id='totalForAmount' value /> */}
                                            <TextInput className='form-text_input' text='Валюта' id='currency' />
                                            <TextInput className='form-text_input' text='Всего к оплате(прописью)' id='totalPayable'/>
                                        </div>
                                    </>
                                }

                                {/* Акт */}
                                {isAct && 
                                    <>
                                        {/* <div className='form-header'>
                                            <InfoLabel text='Доп инфо для заполнения акта' className='form-info_label' />
                                        </div> */}
                                        <InfoLabel text='Приложение' className='form-info_label' />
                                        <div className='form-block'>
                                            <TextInput className='form-text_input' text='Сведения об использовании запасов, полученных от заказчика' id='inventoryUsageInformation'/>
                                            <TextInput className='form-text_input' text='Перечень документации на сколько страниц' id='numberOfPafes'/>
                                            <TextInput className='form-text_input' text='Перечень документов' id='documentsList'/>
                                        </div>
                                    </>
                                }
                            </>
                        }

                        {/* Общие поля */}
                        <div className='form-general_info'>
                        <div className='form-header'>
                                <InfoLabel text='Блок подписи документа' className='form-info_label' />
                                <button className='is-open' onClick={(e) => {e.preventDefault();setIsSignature(!isSignature)}}>{isSignature ? 'Свернуть' : 'Развернуть'}</button>
                        </div>
                        {isSignature &&
                            <>
                                <InfoLabel text='Исполнитель/Поставщик' className='form-info_label' />
                                <div className='form-block'>
                                    <TextInput className='form-text_input' text='Сдал (должность исполнителя)' id='executorPosition'/>
                                    <TextInput className='form-text_input' text='ФИО исполнителя (расшифровка подписи)' id='executorFullName'/>
                                    <ImageInput className='form-text_input' text='Подпись исполнителя' id='executerSignature'/>
                                    {/* {isInvoice && 
                                        <>
                                            <TextInput className='form-text_input' text='ВЫДАЛ (ответственное лицо поставщика)' id='executivePersonSupplier'/>
                                            <TextInput className='form-text_input' text='Должность (кто выдал)' id='executivePersonSupplierPosition'/>
                                        </>
                                    } */}
                                </div>
                                {(isAct || isInvoice) &&
                                    <>
                                        <InfoLabel text='Заказчик/Получатель' className='form-info_label' />
                                        <div className='form-block'>
                                        <TextInput className='form-text_input' text='Принял (должность заказчика)' id='clientPosition'/>
                                        <TextInput className='form-text_input' text='ФИО заказчика (расшифровка подписи)' id='clientFullName'/>
                                        {/* <ImageInput className='form-text_input' text='Подпись заказчика' id='clientSignature'/> */}
                                        {isInvoice && 
                                            <>
                                                <TextInput className='form-text_input' text='Главный бухгалтер ФИО' id='сhiefAccountant'/>
                                            {/* <ImageInput className='form-text_input' text='Подпись бухгалтера' id='executerSignature'/> */}
                                            </>
                                        }
                                        {isAct && 
                                            <TextInput className='form-text_input' text='Дата подписания' id='dateOfSigning'/>
                                        }
                                        </div>
                                    </>
                                }
                            </>
                        }
                        </div>
                        
                        <div className='form-button_block'>
                            <SubmitButton 
                                disabled={!isAct && !isInvoice && !isPayment} 
                                text='Перейти к предпросмотру документа/-ов' 
                                className={!isAct && !isInvoice && !isPayment ? 'form-submit form-submit_disabled' : 'form-submit' }
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default FillInputs;