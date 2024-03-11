import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../services/fetchProducts";
export const ProductList = () => {
  // useSelector hook to select data from Redux state
  const products = useSelector((state) => state.products.data);
  console.log(products, "products");
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="productsList-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </>
  );
};
