import * as actions from './types';

const initialState = {
  data: JSON.parse(localStorage.getItem('data-info')) || {
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
    nameOfGoods: '',
    dateOfWorks: '',
    measure: '',
    quantity: '',
    unitPrice: '',
    withoutVAT: '',
    VATRate: '',
    VATTax: '',
    exciseRate: '',
    exciseTax: '',
    price: '',
    actNumber: '',
    actDate: '',
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
    paymentNumber: '',
    paymentDate: '',
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
    clientSignature: '',
    clientFullName: '',
    dateOfSigning: '',
    executivePersonSupplier: '',
    executivePersonSupplierPosition: '',
    сhiefAccountant: '',  
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
    case actions.DELETE_DATA:
      localStorage.removeItem('data-info');
      localStorage.removeItem('is-act');
      localStorage.removeItem('is-invoice');
      localStorage.removeItem('is-payment');
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