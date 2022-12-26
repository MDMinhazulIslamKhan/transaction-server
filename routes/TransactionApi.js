import { Router } from "express";
import transactionMessage from "../models/transaction.js";

const router = Router();
router.get('/', async (req, res) => {
    const transaction = await transactionMessage.find().sort({ _id: -1 });
    res.json(transaction);
});

router.post('/', async (req, res) => {
    const { amount, details, date } = req.body;
    const transaction = new transactionMessage({
        amount, details, date
    });
    await transaction.save();
    res.send({ message: 'Success' });
});

router.patch('/:id', async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    await transactionMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.send({ message: 'success' })
});

router.delete(`/:id`, async (req, res) => {
    const { id } = req.params;
    await transactionMessage.findByIdAndDelete(id);
    res.send({ message: 'success' })
});

export default router;