import { useProducts } from "../context/ProductContext";
import ReviewForm from "./ReviewForm";

export default function ProductList() {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          {product.reviews.map((r, i) => (
            <p key={i}>
               {r.rating} - {r.comment} ({r.reviewer})
            </p>
          ))}

          <ReviewForm productId={product.id} />
        </div>
      ))}
    </>
  );
}
