import express from "express";
import transactionsController from "../controllers/transactions.controller.js";

const router = express.Router();

// Devuelve todas las transacciones
router.get("/transactions", transactionsController.getTransactions);

// Agrega una nueva transacción
router.post("/transactions", transactionsController.postTransaction);

// Devuelve el número total de transacciones
router.get("/transactions/count", transactionsController.getTransactionCount);

// Eliminar una transacción por id
router.delete("/transactions/:id", transactionsController.deleteTransaction);

// Total de dinero movido
router.get("/transactions/total", transactionsController.getTotalMoneyMoved);

export default router;
