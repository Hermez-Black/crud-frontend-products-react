import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const URL_PRODUCTS = `${BASE_URL}/products/`;
export const productUrlById = (id) => `${URL_PRODUCTS}${id}/`;

export const handlingError = err => console.error(err);

export const getAxios = (url, onSuccessCallback, onErrorCallback = null) => {
  return axios
    .get(url)
    .then(onSuccessCallback)
    .catch(handlingError || onErrorCallback);
};

export const getAllProducts = (onSuccessCallback) => {
  return getAxios(URL_PRODUCTS, onSuccessCallback);
};

export const getOneProductById = (id, onSuccessCallback) => {
  return getAxios(productUrlById(id), onSuccessCallback);
};

export const createProduct = (onSuccessCallback, dataProduct) => {
  return axios
    .post(URL_PRODUCTS, dataProduct)
    .then(onSuccessCallback)
    .catch(handlingError);
};

export const updateProductById = (id, dataProduct, onSuccessCallback) => {
  return axios
    .put(productUrlById(id), dataProduct)
    .then(onSuccessCallback)
    .catch(handlingError);
};

export const deleteProductById = (id, onSuccessCallback) => {
  return axios
    .delete(productUrlById(id))
    .then(onSuccessCallback)
    .catch(handlingError);
};