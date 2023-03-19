import Product from "./Product";

export default function ProductsList({ products, updateProduct, openModalToDeleteProduct }) {
  return (
    <div className="containerList">
    { products?.map(
        (product) => {
            return (
            <Product
                key={product?.id}
                productData={product}
                updateProduct={updateProduct}
                openModalToDeleteProduct={openModalToDeleteProduct}/>);
        }
    ) }
    </div>
  );
}
