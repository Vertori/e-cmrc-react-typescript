import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { ProductsType } from "../types";

export const ProductContext = createContext<ProductsType[] | null>(null);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  // fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductsType[]>(
          `https://fakestoreapi.com/products`
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
