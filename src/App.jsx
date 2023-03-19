import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCreateProduct from './components/Button';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsForm';
import {
  getAllProducts,
  deleteProductById,
  updateProductById,
  createProduct } from './api/products';

export default function App() {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const updateAndSettingProducts = () => {
    getAllProducts((res) => {
      setProducts(res.data);
      console.log(res);
    });
  }

  useEffect(() => {
    updateAndSettingProducts();
  }, [])

  const deleteProduct = (id) => {
    deleteProductById(id, (res) => {
      updateAndSettingProducts();
    })
  };

  const updateProduct = (productData) => {
    alert(productData.id);
    setProductSelected(productData);
    // updateProductById(productData.id, productData,
    // (res) => {
    //    closeModal();
    //    updateAndSettingProducts();
    // })
  }

  const createProductAction = (data) => {
    createProduct(() => {
      updateAndSettingProducts();
      closeModal();
    }, data);
  }

  const showModalByProduct = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <ProductsForm
        showModal={showModal}
        closeModalFunc={closeModal}
        createProductAction={createProductAction}></ProductsForm>
      <div className='navHeaderContainer'>
        <h1>Productos</h1>
        <ButtonCreateProduct newProductAction={showModalByProduct}/>
      </div>
      <ProductsList
        products={products}
        deleteProduct={(id) => deleteProduct(id)}
        updateProduct={(productData => updateProduct(productData))} />
    </div>
  );
}
