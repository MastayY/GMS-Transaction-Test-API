const Transaction = require("../models/Transaction")

const getAllTransactions = async (req, res) => {
    try {
        const [data] = await Transaction.getAllTransactions();

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getTransactionById = async (req, res) => {
    try {
        const id = req.params.id;
        const [data] = await Transaction.getTransactionById(id);

        if (data.length === 0) {
            res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        } else {
            res.status(200).json({
                success: true,
                data: data[0]
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const createTransaction = async (req, res) => {
    try {
        const transaction = req.body;
        const [data] = await Transaction.createTransaction(transaction);

        res.status(201).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = req.body;
        const [data] = await Transaction.updateTransaction(id, transaction);

        if (data.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        } else {
            res.status(200).json({
                success: true,
                data: data
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction
}