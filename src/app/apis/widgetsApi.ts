import { unprotectedGetRequest, unprotectedPostRequest } from './apiGenerics'


export const getWidgetsList = async () => {
  return await unprotectedGetRequest('Widgets/GetWidgets') 
}

export const addWidget = async (body: any) => {
  return await unprotectedPostRequest('Widgets/AddWidget', body) 
}

export const updateWidget = async (body: any) => {
  return await unprotectedPostRequest('Widgets/UpdateWidget', body) 
}

export const removeWidgetById = async (body: any) => {
  return await unprotectedPostRequest('Widgets/RemoveWidget', body) 
}