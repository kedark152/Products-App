import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../services/fetchProducts";
import CircularProgress from "@mui/material/CircularProgress";

export const ProductList = () => {
  // useSelector hook to select data from Redux state
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const errorText = useSelector((state) => state.products.error);

  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="productsList-container">
        {status === "success" &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {status === "loading" && (
          <div className="loading-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20%",
              }}
            >
              <CircularProgress />
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="error-container">{errorText}</div>
        )}
      </div>
    </>
  );
};
