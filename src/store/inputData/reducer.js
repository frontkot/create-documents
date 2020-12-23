import * as actions from './types';

const initialState = {
  data: {
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
  isAct: false,
  isInvoice: false,
  isPayment: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
    case actions.UPDATE_DATA:
      return { ...state, data: action.payload }
    case actions.DELETE_DATA:
      return { ...state, ...initialState }
    case actions.IS_ACT:
      return { ...state, isAct: action.payload }
    case actions.IS_INVOICE:
      return { ...state, isInvoice: action.payload }
    case actions.IS_PAYMENT:
      return { ...state, isPayment: action.payload }
  }
}

export default reducer;