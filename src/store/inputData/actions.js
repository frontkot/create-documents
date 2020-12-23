import * as actions from './types';

// export const dataLoading = (isLoading) => ({
//   type: actions.LOAD_DATA, 
//   payload: isLoading
// })

export const updateData = (products) => ({
  type: actions.UPDATE_DATA, 
  payload: products
})

export const daleteData = () => ({
  type: actions.DELETE_DATA
})

export const toggleIsAct = (bool) => ({
  type: actions.IS_ACT, 
  payload: bool
})

export const toggleIsInvoice = (bool) => ({
  type: actions.IS_INVOICE, 
  payload: bool
})

export const toggleIsPayment = (bool) => ({
  type: actions.IS_PAYMENT, 
  payload: bool
})
