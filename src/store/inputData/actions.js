import * as actions from './types';

export const updateData = (data) => ({
  type: actions.UPDATE_DATA,
  payload: data
})

export const updateTableData = (data) => ({
  type: actions.UPDATE_TABLE_DATA,
  payload: data
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
