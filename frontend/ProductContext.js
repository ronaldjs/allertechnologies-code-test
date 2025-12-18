import {  createContext, useContext, useState, useEffect, use} from 'react';


const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    // "http://localhost:3001/products"
    const res = await fetch('/products');
    const data = await res.json();
    setProducts(data);

    setLoading(false);  
  }


  const addReview = async (productId, review) => {
    await fetch(`http://localhost:3001/products/${productId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    });
    fetchProducts();
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

return (
    <ProductContext.Provider value={{ products, loading, addReview }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
