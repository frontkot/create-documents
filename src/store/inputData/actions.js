import * as actions from './types';

export const updateData = (products) => ({
  type: actions.UPDATE_DATA,
  payload: products
})

export const deleteData = () => ({
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
