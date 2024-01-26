import express from 'express';
import CartProduct from '../models/CartProduct';

const router = express.Router();

router.post('/cartProducts', async (req, res) => {
    try {
        const newCartProduct = new CartProduct(req.body);
        const savedCartProduct = await newCartProduct.save();
        res.status(201).json(savedCartProduct);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/cartProducts', async (req, res) => {
    try {
        const cartProducts = await CartProduct.find();
        res.json(cartProducts);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;