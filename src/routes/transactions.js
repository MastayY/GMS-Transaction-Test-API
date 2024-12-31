const express = require("express");
const TransactionController = require("../controllers/transaction.controller");

const router = express.Router();

router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransactionById);
router.post("/", TransactionController.createTransaction);
router.put("/:id", TransactionController.updateTransaction);

module.exports = router;