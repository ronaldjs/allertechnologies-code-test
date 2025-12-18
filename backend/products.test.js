import request from "supertest";
import express from "express";
import productsRoutes from "../routes/products.js";

const app = express();
app.use(express.json());
app.use("/products", productsRoutes);

test("POST /products/:id/reviews should validate rating", async () => {
  const res = await request(app)
    .post("/products/1/reviews")
    .send({ reviewer: "Ronald", rating: 10, comment: "Bad" });

  expect(res.statusCode).toBe(400);
});
