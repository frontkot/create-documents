import React, { useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
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

    const VATRatePerc = 20;
    const WithoutVAT = 100;
    const ExciseRatePerc = 20;
    const WithoutExciseRate = 100;

    const sumOfPrice = (val) => {
        let num = 0;
        for(let i=0; i < val.length; i++) {
            if(val[i].unitPrice !== undefined) {
                    num = num + val[i].unitPrice*val[i].quantity
            }
        }
        return num;
    }

    const VATPrice = (values) => {
        const VAT = values.VATRate/100;
        const totalPrice = sumOfPrice(values.tableInfo);
        return VAT === 1 ? 0 : totalPrice*VAT
    };

    const excisePrice = (values) => {
        const excise = values.exciseRate/100;
        const totalPrice = sumOfPrice(values.tableInfo);
        return excise === 1 ? 0 : totalPrice*excise;
    };

    const totalPrice = (values) => {
        const sum = sumOfPrice(values.tableInfo);
        const VAT = VATPrice(values);
        const excise = excisePrice(values);
        return sum+VAT+excise;
    }

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
                {({ errors, touched, values, meta }) => (
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
                                    <TextInput className='form-text_input' text='Кбе бенефициара (исполнителя)' id='executorKbe'/>
                                    <TextInput className='form-text_input' text='БИК Банка бенефициара (исполнителя)' id='executorBankBIK'/>
                                    <TextInput className='form-text_input' text='Код заключения платежа банка бенефициара (исполнителя)' id='executorBankCode'/>
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
                        {(isAct || isPayment || isInvoice) &&
                            <>
                            <div className='form-header'>
                                <InfoLabel text='Таблица товаров и услуг' className='form-info_label' />
                            </div>
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
                                                        <div className='delete-button_block'>
                                                            <button className='delete-button' type="button" onClick={() => arrayHelpers.remove(index)}></button>
                                                        </div>
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
                                                    <p className='total-info'><span>Всего НДС:</span><span>{VATPrice(values)}</span></p>
                                                        {isInvoice &&
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
                                        </div>
                                    </>
                                }

                                {isPayment &&
                                    <>
                                        <InfoLabel text='Итоговая инфо для счета на оплату' className='form-info_label' />
                                        <div className='form-block'>
                                            <TextInput className='form-text_input' text='Валюта' id='currency' />
                                            <TextInput className='form-text_input' text='Всего к оплате(прописью)' id='totalPayable'/>
                                        </div>
                                    </>
                                }

                                {/* Акт */}
                                {isAct && 
                                    <>
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