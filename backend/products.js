import express  from "express"  
import { products } from "./data";  

const router = express.Router();


router.get("/", (req, res) => {
    res.json(products);
});

router.post("/:id/reviews", (req, res) => {
    const { id } = req.params;
    const { review, rating, comment } = req.body;

    if (!review || rating < 1 || rating > 5 || !comment) {

        return res.status(400).json({ error: "Invalid review data" });
    }
    
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    const newReview = {
        review,
        rating,
        comment,
        date: new Date()
    };
    
    product.reviews.push(newReview);

    res.status(201).json(newReview);
});

export default router;
