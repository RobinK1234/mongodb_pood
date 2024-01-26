import express from 'express';
import Category from '../models/Category';

const router = express.Router();

router.post('/categories', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export default router;