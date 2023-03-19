import Product from "./Product";

export default function ProductsList({ products, deleteProduct, updateProduct }) {
  return (
    <div className="containerList">
    { products?.map(
        (product) => {
            return (
            <Product
                key={product?.id}
                productData={product}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}/>);
        }
    ) }
    </div>
  );
}
