import * as actions from './types';

const newDate = new Date();
const checkDate = (date) => {
  let num = date ? newDate.getDate() : newDate.getMonth() + 1;
  if(num < 10) {
    num = '0' + num;
  }
  return num
}
const thatDate = checkDate(true);
const thatMonth = checkDate();

const today = thatDate + '.' + thatMonth + '.' + newDate.getFullYear();

const initialState = {
  data: JSON.parse(localStorage.getItem('data-info')) || {
    docNumber: '1',
    docDate: today,
    client: '',
    clientTaxNumber: '',
    clientBINNumber: '',
    clientAdress: '',
    clientBank: '',
    executor: '',
    executorTaxNumber: '',
    executorBINNumber: '',
    executorAdress: '',
    executorBank: '',
    contract: '',
    contractDate: '',
    contractСonditions: '',
    destination: '',
    proxy: '',
    departureMethod: '',
    CMR: '',
    shipper: '',
    consignee: '',
    procedureDate: today,
    inventoryUsageInformation: '',
    numberOfPafes: '',
    documentsList: '',
    beneficiary: '',
    beneficiaryTaxNumber: '',
    beneficiaryIIK: '',
    beneficiaryKbe: '',
    beneficiaryBank: '',
    beneficiaryBIK: '',
    beneficiaryBankCode: '',
    totalPayableForAll: '',
    includingVAT: '',
    totalItems: '',
    totalForAmount: '',
    currency: 'KZT',
    totalPayable: '',
    executerPosition: '',
    executerSignature: '',
    executerFullName: '',
    clientPosition: '',
    clientFullName: '',
    dateOfSigning: today,
    executivePersonSupplier: '',
    executivePersonSupplierPosition: '',
    сhiefAccountant: '',  
    tableInfo: [],
    VATRate: '100',
    exciseRate: '100',
    executorSignature: localStorage.getItem('executorSignature') || '',
    clientSignature: localStorage.getItem('clientSignature') || '',
    executorStamp: localStorage.getItem('executorStamp') || '',
    clientStamp: localStorage.getItem('clientStamp') || '',
  },
  isAct: JSON.parse(localStorage.getItem('is-act')) || false,
  isInvoice:  JSON.parse(localStorage.getItem('is-invoice')) || false,
  isPayment:  JSON.parse(localStorage.getItem('is-payment')) || false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
    case actions.UPDATE_DATA:
      localStorage.setItem('data-info', JSON.stringify(action.payload))
      return { ...state, data: action.payload }
    case actions.UPDATE_TABLE_DATA:
      localStorage.setItem('table-info', JSON.stringify(action.payload))
      return { ...state, tableInfo: action.payload }
    case actions.DELETE_DATA:
      localStorage.clear();
      // localStorage.removeItem('executorSignature')
      // localStorage.removeItem('clientSignature')
      // localStorage.removeItem('executorStamp')
      // localStorage.removeItem('clientStamp')
      // localStorage.removeItem('data-info');
      // localStorage.removeItem('is-act');
      // localStorage.removeItem('is-invoice');
      // localStorage.removeItem('is-payment');
      return { ...state, ...initialState }
    case actions.IS_ACT:
      localStorage.setItem('is-act', JSON.stringify(action.payload))
      return { ...state, isAct: action.payload }
    case actions.IS_INVOICE:
      localStorage.setItem('is-invoice', JSON.stringify(action.payload))
      return { ...state, isInvoice: action.payload }
    case actions.IS_PAYMENT:
      localStorage.setItem('is-payment', JSON.stringify(action.payload))
      return { ...state, isPayment: action.payload }
  }
}

export default reducer;


// tableInfo: JSON.parse(localStorage.getItem('table-info')) || {tableInfo: {
//   item: '',
//   nameOfGoods: 'Что-то там',
//   dateOfWorks: '',
//   measure: '',
//   quantity: '12',
//   unitPrice: '',
//   withoutVAT: '',
//   VATRate: '',
//   VATTax: '',
//   exciseRate: '',
//   exciseTax: '',
//   price: '',
// },
// },
