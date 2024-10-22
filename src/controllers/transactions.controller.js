import transactionsService from "../services/transactions.service.js";

const getTransactions = async (req, res) => {
    const transactions = await transactionsService.getAllTransactions();
    res.status(200).json(transactions);
};

const postTransaction = async (req, res) => {
    const { tipo, monto, destinatario } = req.body;

    // Valido que los campos requeridos estén
    if (!tipo || !monto || !destinatario) {
        return res.status(400).json({ error: "Faltan parámetros requeridos" });
    }

    // Valido que el tipo sea "deposito" o "retiro" tal cual sin mayusculas
    if (!["deposito", "retiro"].includes(tipo)) {
        return res.status(400).json({ error: "Tipo de transacción inválido" });
    }

    // Valido que el monto sea un número positivo
    if (isNaN(monto) || monto <= 0) {
        return res.status(400).json({ error: "El monto debe ser un número positivo mayor a 0" });
    }

    // Si es un retiro, valido que haya suficiente saldo en la cuenta
    if (tipo === "retiro") {
        const totalMoney = await transactionsService.getTotalMoneyMoved();
        if (monto > totalMoney) {
            return res.status(400).json({ error: "Saldo insuficiente para realizar el retiro" });
        }
    }

    try {
        const newTransaction = await transactionsService.addTransaction(req.body);
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactionCount = async (req, res) => {
    const count = await transactionsService.getTransactionCount();
    res.status(200).json({ message: "Cantidad de transacciones", transactions: count });
};

const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await transactionsService.deleteTransaction(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getTotalMoneyMoved = async (req, res) => {
    const total = await transactionsService.getTotalMoneyMoved();
    res.status(200).json({ message: "Total de dinero movido", total });
};

export default {
    getTransactions,
    postTransaction,
    getTransactionCount,
    deleteTransaction,
    getTotalMoneyMoved
};
