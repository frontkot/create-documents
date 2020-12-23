import * as actions from './types';

const initialState = {
  data: JSON.parse(localStorage.getItem('data-info')) || {
    client: '',
    clientTaxNumber: '',
    executor: '',
    executorTaxNumber: '',
    contract: '',
    nameOfWorks: '',
    dateOfWorks: '',
    measure: '',
    quantity: '',
    unitPrice: '',
    price: '',
    actNumber: '',
    actDate: '',
    inventoryUsageInformation: '',
    numberOfPafes: '',
    documentsList: '',
    executerPosition: '',
    executerSignature: '',
    executerFullName: '',
    clientPosition: '',
    clientSignature: '',
    clientFullName: '',
    dateIfSigning: '',
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