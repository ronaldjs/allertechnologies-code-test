import { useState } from "react";
import { useProducts } from "../context/ProductContext";

export default function ReviewForm({ productId }) {
  const { addReview } = useProducts();
  const [form, setForm] = useState({ reviewer: "", rating: 1, comment: "" });
  const [error, setError] = useState("");

  const submit = e => {
    e.preventDefault();

    if (!form.reviewer || !form.comment) {
      setError("All fields required");
      return;
    }

    addReview(productId, form);
    setForm({ reviewer: "", rating: 1, comment: "" });
    setError("");
  };

  return (
    <form onSubmit={submit}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Name"
        value={form.reviewer}
        onChange={e => setForm({ ...form, reviewer: e.target.value })}
      />

      <input
        type="number"
        min="1"
        max="5"
        value={form.rating}
        onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
      />

      <input
        placeholder="Comment"
        value={form.comment}
        onChange={e => setForm({ ...form, comment: e.target.value })}
      />

      <button>Submit</button>
    </form>
  );
}
