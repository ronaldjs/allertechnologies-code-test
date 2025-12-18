import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
}