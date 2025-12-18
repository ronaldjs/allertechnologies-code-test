import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";
import { ProductProvider } from "../context/ProductContext";

test("renders loading state", () => {
  render(
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});