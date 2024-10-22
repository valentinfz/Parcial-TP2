import transactionsModel from "../models/transactions.model.js";

const getAllTransactions = async () => {
    return await transactionsModel.getAllTransactions();
};

const addTransaction = async (transaction) => {
    return await transactionsModel.addTransaction(transaction);
};

const deleteTransaction = async (id) => {
    return await transactionsModel.deleteTransaction(id);
};

const getTotalMoneyMoved = async () => {
    return await transactionsModel.getTotalMoneyMoved();
};

const getTransactionCount = async () => {
    return await transactionsModel.getTransactionCount();
};

export default {
    getAllTransactions,
    addTransaction,
    deleteTransaction,
    getTotalMoneyMoved,
    getTransactionCount
};

