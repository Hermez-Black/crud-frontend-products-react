import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ButtonCreateProduct from './components/Button';
import ProductsList from './components/ProductsList';
import ProductsForm from './components/ProductsForm';
import ModalDelete from './components/ModalDelete';
import ModalAlert from './components/ModalAlert';
import Loader from './components/Loader';
import {
  getAllProducts,
  deleteProductById,
  updateProductById,
  createProduct } from './api/products';

export default function App() {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("update");
  const [alertCustomMessage, setAlertCustomMessage] = useState("");

  const showModalAlert = (typeAlert, customMessage) => {
    setShowAlert(true);
    setAlertType(typeAlert);
    setAlertCustomMessage(customMessage);
  }

  const updateAndSettingProducts = () => {
    setIsLoading(true);
    getAllProducts((res) => {
      setProducts(res.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }

  useEffect(() => {
    updateAndSettingProducts();
  }, [])

  const handleAgreeDelete = () => {
    deleteProductById(idToDelete, (res) => {
      updateAndSettingProducts();
      setOpen(false);
      showModalAlert("delete", `${idToDelete} fue eliminado!`);
    })
  }

  const handleCloseCancel = () => {
    console.log("Cancelando");
    setOpen(false);
    setIdToDelete(0);
  }

  const openModalToDeleteProduct = (id) => {
    setOpen(true);
    setIdToDelete(id);
  }

  const openModalToUpdateProduct = (productData) => {
    setProductSelected(productData);
    setShowModal(true);
  }

  const updateProduct = (dataProduct) => {
    updateProductById(dataProduct.id, dataProduct,
      (res) => {
        closeModal();
        updateAndSettingProducts();
        setProductSelected(null);
        showModalAlert("update", `${dataProduct.name} fue actualizado!`);
    });
  }
  const createProductAction = (data) => {
    createProduct(() => {
      updateAndSettingProducts();
      closeModal();
      showModalAlert("create", `${data.name} fue creado!`);
    }, data);
  }

  const showModalByProduct = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  if (isLoading) {
    return (<Loader />);
  }

  return (
    <div className="App">
      <ModalAlert
        alertType={alertType}
        alertCustomMessage={alertCustomMessage}
        closeAlert={() => setShowAlert(false)}
        statusModalAlert={showAlert}
      />
      <ModalDelete
        open={open}
        handleAgreeDelete={handleAgreeDelete}
        handleCloseCancel={handleCloseCancel} />
      <ProductsForm
        showModal={showModal}
        closeModalFunc={closeModal}
        createProductAction={createProductAction}
        dataToUpdateProduct={productSelected}
        updateProductAction={updateProduct}
        methodSetProductSelected={setProductSelected} />
      <div className='navHeaderContainer'>
        <h1>Productos</h1>
        <ButtonCreateProduct newProductAction={showModalByProduct}/>
      </div>
      {
        !products.length ?
        <h1 style={{ marginTop: 30 }}>No hay productos, intenta crear algunos</h1>
        :
        <ProductsList
        products={products}
        openModalToDeleteProduct= {openModalToDeleteProduct}
        updateProduct={(productData => openModalToUpdateProduct(productData))} />
      }
    </div>
  );
}
