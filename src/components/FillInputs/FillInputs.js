import React, { useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import TextInput from '../form/TextInput/TextInput';
import SubmitButton from '../form/SubmitButton/SubmitButton';
import InfoLabel from '../form/InfoLabel/InfoLabel';
import './FillInputs.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getIsAct, getIsInvoice, getIsPayment } from '../../store/inputData/selectors';
import { updateData, deleteData } from '../../store/inputData/actions';
import { toggleIsAct, toggleIsInvoice, toggleIsPayment } from '../../store/inputData/actions';
import ImageInput from '../form/ImageInput/ImageInput';
import TableItem from '../form/TableItem/TableItem';


const FillInputs = () => {
    const dataFromDb = useSelector(getData);
    const [data, setData] = useState(dataFromDb);
    const history = useHistory();
    const isAct = useSelector(getIsAct);
    const isInvoice = useSelector(getIsInvoice);
    const isPayment = useSelector(getIsPayment);
    const dispatch = useDispatch();  
    const [isSignature, setIsSignature] = useState(false);
    const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);

    const [isClientAddInfo, setIsCLientAddInfo] = useState(false);
    const [isExecutorAddInfo, setIsExecutorAddInfo] = useState(false);
    const [isContractAddInfo, setIsContractAddInfo] = useState(false);
    const [isDocumentAddInfo, setIsDocumentAddInfo] = useState(false);

    const [isVAT, setIsVAT] = useState(false);
    const [isExcise, setIsExcise] = useState(false);


    
    
    
    
    const VATRatePerc = 20;
    const WithoutVAT = 100;
    const ExciseRatePerc = 20;
    const WithoutExciseRate = 100;
    
    const isClientStamp = localStorage.getItem('clientStamp') !== null;
    const isClientSignature = localStorage.getItem('clientSignature') !== null;
    const isExecutorStamp = localStorage.getItem('executorStamp') !== null;
    const isExecutorSignature = localStorage.getItem('executorSignature') !== null;




    const sumOfPrice = (val) => {
        let num = 0;
        for(let i=0; i < val.length; i++) {
            if(val[i].unitPrice !== undefined && val[i].quantity !== undefined) {
                    num = num + val[i].unitPrice*val[i].quantity
            }
        }
        return num;
    }

    const VATPrice = (values) => {
        const VAT = values.VATRate/100;
        const totalPrice = sumOfPrice(values.tableInfo);
        return VAT === 1 ? 0 :  Math.round(totalPrice*VAT)
    };

    const excisePrice = (values) => {
        const excise = values.exciseRate/100;
        const totalPrice = sumOfPrice(values.tableInfo);
        return excise === 1 ? 0 :  Math.round(totalPrice*excise);
    };

    const totalPrice = (values) => {
        const sum = sumOfPrice(values.tableInfo);
        const VAT = VATPrice(values);
        const excise = excisePrice(values);

        VAT === 0 ? setIsVAT(false) : setIsVAT(true);
        excise === 0 ? setIsExcise(false) : setIsExcise(true);
        return sum+VAT+excise;
    }

    const totalUnitPrice = (values, index) => (
        (values.tableInfo[index].unitPrice !== undefined && values.tableInfo[index].quantity !== undefined) ?
            (values.tableInfo[index].unitPrice.length > 0 && values.tableInfo[index].quantity.length > 0) ?
                values.tableInfo[index].unitPrice*values.tableInfo[index].quantity
                : '0'
            : '0'
    )

    const emptyItem = () => (
        {
            item: '',
            nameOfGoods: '',
            dateOfWorks: '',
            measure: '',
            quantity: '',
            unitPrice: '',
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
            <div className='form-header'>   
                <div className='form-choose_doc'>
                    <label className={isAct ? 'checkbox-label checkbox-label_active' : 'checkbox-label'}>
                        <span>Акт вып. работ</span>
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
                <div className='form-clear_button'>
                    <button className='clear-form_button' onClick={clearForm}>Очистить форму</button>
                </div>
            </div>

            <Formik
                initialValues={data}
                // validate={validate}
                onSubmit={submitForm}
            >
                {({ errors, touched, values, meta }) => (
                    <Form className='form-container'>
                        <div className='form-general_info'>
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Номер документа(-ов)' id='docNumber'/>
                                <TextInput className='form-text_input' text='Дата документа' id='docDate'/>
                                {(isInvoice || isAct) &&
                                    <button className={isAdditionalInfo ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsDocumentAddInfo(!isDocumentAddInfo)}}>+</button>
                                }
                                {isDocumentAddInfo && 
                                <>

                                {isInvoice && 
                                    <>
                                        <TextInput className='form-text_input' text='Дата совершения процедуры' id='procedureDate'/>
                                    </>
                                }
                                {isAct && 
                                    <>
                                        <TextInput className='form-text_input' text='Дата подписания акта' id='dateOfSigning'/>
                                    </>
                                }
                                </>
                                }

                            </div>
                        </div>

                        {/* Общие поля */}
                        <div className='form-general_info'>
                            {/* <InfoLabel text='Заказчик/Покупатель' className='form-info_label' /> */}
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Заказчик/Покупатель' id='client' placeholder='ИП или ТОВ'/>
                                <button className={isClientAddInfo ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsCLientAddInfo(!isClientAddInfo)}}>+</button>

                                {isClientAddInfo &&
                                    <>
                                        <TextInput className='form-text_input' text='ФИО заказчика' id='clientFullName' placeholder='Фамилия Имя Отчество'/>
                                        <TextInput className='form-text_input' text='БИН Заказчика/Покупателя' id='clientBINNumber' placeholder='123456789012'/>
                                        {(isInvoice || isPayment) &&
                                            <>
                                                <TextInput className='form-text_input' text='Адрес Поупателя/Получателя' id='clientAdress' placeholder='Город, улица...'/>
                                                <TextInput className='form-text_input' text='Банк получателя' id='clientBank' placeholder=''/>
                                                <TextInput className='form-text_input' text='ИИК Заказчика/Покупателя' id='clientIIKNumber' placeholder='098765432109'/>
                                                <TextInput className='form-text_input' text='БИКбанка' id='clientBIKBank' placeholder=''/>
                                            </>
                                        }
                                        <TextInput className='form-text_input' text='Принял (должность заказчика)' id='clientPosition' placeholder='Директор'/>
                                    </>
                                }
                            </div>

                            {/* <InfoLabel text='Исполнитель/Поставщик' className='form-info_label' /> */}
                            <div className='form-block'>
                                <TextInput className='form-text_input' text='Исполнитель/Поставщик' id='executor' placeholder='ИП или ТОВ'/>
                                <button className={isExecutorAddInfo ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsExecutorAddInfo(!isExecutorAddInfo)}}>+</button>
                                {isExecutorAddInfo && 
                                    <>
                                        <TextInput className='form-text_input' text='ФИО исполнителя' id='executorFullName' placeholder='Фамилия Имя Отчество'/>
                                        <TextInput className='form-text_input' text='БИН Исполнителя/Поставщика' id='executorBINNumber' placeholder='123456789012'/>
                                        {(isPayment || isInvoice) &&
                                            <>
                                                <TextInput className='form-text_input' text='Адрес Исполнителя/Поставщика' id='executorAdress' placeholder='Город, улица...'/>
                                            </>
                                        }
                                        {(isPayment || isInvoice) &&
                                            <>
                                                <TextInput className='form-text_input' text='ИИК бенефициара' id='executorIIK' placeholder='098765432109'/>
                                            </>
                                        }
                                        {isInvoice && 
                                                <TextInput className='form-text_input' text='Банк бенефициара' id='executorBank' placeholder=''/>
                                        }
                                        {isPayment &&
                                            <>
                                            <TextInput className='form-text_input' text='Кбе бенефициара' id='executorKbe' placeholder=''/>
                                            <TextInput className='form-text_input' text='БИК Банка бенефициара' id='executorBankBIK' placeholder=''/>
                                            <TextInput className='form-text_input' text='Код платежа банка бенефициара' id='executorBankCode' placeholder=''/>
                                            </>
                                        }
                                        <TextInput className='form-text_input' text='Сдал (должность исполнителя)' id='executorPosition' placeholder='Директор'/>
                                    </>
                                }
                            </div>
                            {/* <InfoLabel text='Договор' className='form-info_label' /> */}
                            {(isAct || isPayment || isInvoice) && 
                                <div className='form-block'>
                                    <TextInput className='form-text_input' text='Договор (контракт)' id='contract' placeholder='АР-9'/>
                                    <button className={isContractAddInfo ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsContractAddInfo(!isContractAddInfo)}}>+</button>
                                    {isContractAddInfo && 
                                        <>
                                            {(isPayment || isInvoice) &&
                                                <>
                                                    <TextInput className='form-text_input' text='Дата заключения договора (контракта)' id='contractDate' placeholder='20.12.2012'/>
                                                    <TextInput className='form-text_input' text='Уловия оплаты по договору (контракту)' id='contractСonditions' placeholder='безналичный расчет'/>
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            }
                        </div>
                        
                        {/* Таблица */}
                        {(isAct || isPayment || isInvoice) &&
                            <>
                                {values.tableInfo.length !==0 &&
                                        <div className='table-header'>
                                            <div className='table-header_item-number'><span>№</span></div>
                                            <div className='table-header_item-name'><span>Товар или услуга</span></div>
                                            {/* text='Наименование товаров (работ, услуг)' */}
                                            {isPayment &&
                                                <div className='table-header_item-code'><span>Код товара</span></div>
                                            }
                                            {/* text='Код товара' */}
                                            {isAct && 
                                                <div className='table-header_item-date'><span>Дата выполнения работ</span></div>
                                            }
                                            {/* text='Дата выполнения работ' */}
                                            <div className='table-header_item-measure'><span>Единица измерения</span></div>
                                            {/* text='Единица измерения' */}
                                            <div className='table-header_item-quantity'><span>Кол-во</span></div>
                                            {/* text='Количество товаров' */}
                                            <div className='table-header_item-price'><span>Цена</span></div>
                                            {/* text='Цена за единицу'  */}
                                            <div className='table-header_item-total'><span>Итого за товар</span></div>
                                        </div>
                                }
                                <FieldArray 
                                    name='tableInfo'
                                    >
                                    {arrayHelpers => (
                                        <>
                                            {values.tableInfo.length !==0 ? values.tableInfo.map((item, index) => (
                                                <div className='table-body' id={`tableData[${index}].item`} key={index}>
                                                    <TableItem text={`${index+1}`} className='table-body_item-number' />
                                                    <TableItem className='table-body_item-name' id={`tableInfo[${index}].nameOfGoods`} placeholder='Название'/>
                                                    {isPayment &&
                                                        <TableItem className='table-body_item-code' id={`tableInfo[${index}].productCode`} placeholder='Код'/>
                                                    }
                                                    {isAct && 
                                                        <TableItem className='table-body_item-date' id={`tableInfo[${index}].dateOfWorks`} placeholder='Дата'/>
                                                    }
                                                    <TableItem className='table-body_item-measure' id={`tableInfo[${index}].measure`} placeholder='ед./шт.'/>
                                                    <TableItem className='table-body_item-quantity'  id={`tableInfo[${index}].quantity`} placeholder='Кол-во'/>
                                                    <TableItem className='table-body_item-price' id={`tableInfo[${index}].unitPrice`} placeholder='Цена'/>
                                                    <TableItem className='table-body_item-total' id={`tableInfo[${index}].totalPrice`} placeholder='Итого' text={totalUnitPrice(values, index)}/>
                                                    <div className='delete-button_block'>
                                                        <button className='delete-button' type="button" onClick={() => arrayHelpers.remove(index)}></button>
                                                    </div>
                                                </div>
                                            ))
                                            : null
                                            }
                                            <button className='add-item' type='button' onClick={() => arrayHelpers.push(emptyItem)}>+</button>
                                        </>
                                    )}
                                </FieldArray> 
                                {values.tableInfo.length !==0 &&
                                    <div className='total-data'>
                                        <div className='total-select'>
                                            {(isInvoice || isPayment) &&
                                                <>
                                                    <Field as='select' className='form-select' name='VATRate' id='VATRate'>
                                                        <option value={WithoutVAT}>Без НДС</option>
                                                        <option value={VATRatePerc}>НДС 20%</option>
                                                    </Field>
                                                    {isInvoice &&
                                                        <Field as='select' className='form-select' name='exciseRate'>
                                                            <option value={WithoutExciseRate}>Без Акциза</option>
                                                            <option value={ExciseRatePerc}>Акциз 20%</option>
                                                        </Field>
                                                    }
                                                </>
                                            }
                                        </div>
                                        <div className='total-prices'>
                                            {(isInvoice || isPayment) &&
                                                <>
                                                    <p className='total-info'><span>Итого:</span><span>{sumOfPrice(values.tableInfo)}</span></p>
                                                    {isVAT &&
                                                        <p className='total-info'><span>Всего НДС:</span><span>{VATPrice(values)}</span></p>
                                                    }
                                                    {(isInvoice && isExcise) &&
                                                        <p className='total-info'><span>Всего Акциз:</span><span>{excisePrice(values)}</span></p>
                                                    }
                                                </>
                                            }
                                            <p className='total-info'><span>Всего к оплате:</span><span>{totalPrice(values)}</span></p>
                                        </div>
                                    </div>
                                }
                            </>
                        }

                        {/* Счет на оплату */}
                        {(isAct || isPayment || isInvoice) && 
                            <>
                                <div className='form-block'>
                                    <>
                                        <InfoLabel text='Доп инфо для заполнения документов' className='form-info_label' />
                                        <button className={isAdditionalInfo ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsAdditionalInfo(!isAdditionalInfo)}}>+</button>
                                    </>
                                </div>
                                {isAdditionalInfo &&
                                    <>
                                        {isPayment &&
                                            <div className='form-block'>
                                                <TextInput className='form-text_input' text='Валюта' id='currency' placeholder='KZT или RUB'/>
                                            </div>
                                        }
                                        {isInvoice &&
                                            <div className='form-block'>
                                                <InfoLabel text='Доставка товара' className='form-info_title'/>
                                                <TextInput className='form-text_input' text='Пункт назначения' id='destination' placeholder='Страна, регион, город, район'/>
                                                <TextInput className='form-text_input' text='Поставка по довренности' id='proxy' placeholder='Без доверенности'/>
                                                <TextInput className='form-text_input' text='Способ отправления' id='departureMethod' placeholder=''/>
                                                <TextInput className='form-text_input' text='Товарно-транспортная накладная' id='CMR' placeholder='номер ТТН'/>
                                            </div>
                                        }
                                        {/* Акт */}
                                        {isAct && 
                                            <div className='form-block'>
                                                <InfoLabel text='Приложение' className='form-info_title' />
                                                <TextInput className='form-text_input' text='Сведения об использовании запасов' id='inventoryUsageInformation'/>
                                                <TextInput className='form-text_input' text='Перечень документации (cтраниц)' id='numberOfPafes'/>
                                                <TextInput className='form-text_input' text='Перечень документов' id='documentsList'/>
                                            </div>
                                        }
                                    </>
                                }

                                {/* Общие поля */}
                                <div className='form-general_info'>
                                    <div className='form-block'>
                                            <InfoLabel text='Блок подписи документа' className='form-info_label' />
                                            <button className={isSignature ? 'hide-info_button' : 'add-info_button'} onClick={(e) => {e.preventDefault();setIsSignature(!isSignature)}}>+</button>
                                    </div>
                                    {isSignature &&
                                        <>
                                            <div className='form-block sign-block'>
                                                <InfoLabel text='Исполнитель/Поставщик' className='form-info_title' />
                                                <div className='sign-input'>
                                                    <ImageInput className='form-text_input' text='Подпись исполнителя' id='executorSignature'/>
                                                    {isExecutorSignature && <span className='sign_already-selected'>Подпись исполнителя уже выбрана, чтобы изменить, выберите новый файл</span>}
                                                </div>
                                                <div className='stamp-input'>
                                                    <ImageInput className='form-text_input' text='Печать исполнителя' id='executorStamp'/>
                                                    {isExecutorStamp && <span className='stamp_already-selected'>Штамп исполнителя уже выбран, чтобы изменить, выберите новый файл</span>}
                                                </div>
                                            </div>
                                            {(isAct || isInvoice) &&
                                                <>
                                                    <div className='form-block sign-block'>
                                                        <InfoLabel text='Заказчик/Получатель' className='form-info_title' />
                                                        <div className='sign-input'>
                                                            <ImageInput className='form-text_input' text='Подпись заказчика' id='clientSignature'/>
                                                            {isClientSignature && <span className='sign_already-selected'>Подпись заказчика уже выбрана, чтобы изменить, выберите новый файл</span>}
                                                        </div>
                                                        <div className='stamp-input'>
                                                            <ImageInput className='form-text_input' text='Печать заказчика' id='clientStamp'/>
                                                            {isClientStamp && <span className='stamp_already-selected'>Штамп заказчикa уже выбран, чтобы изменить, выберите новый файл</span>}
                                                        </div>
                                                    </div>

                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </>
                        }                       
                        <div className='form-button_block'>
                            <SubmitButton 
                                disabled={!isAct && !isInvoice && !isPayment} 
                                text='Перейти к предпросмотру' 
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