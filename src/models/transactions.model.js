import { promises as fs } from 'fs';

const transactions = [];
const filePath = './transactions.json';

const loadFromFile = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return transactions;
    }
};

const saveToFile = async (data) => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const getAllTransactions = async () => {
    return await loadFromFile();
};

const addTransaction = async (transaction) => {
    const data = await loadFromFile();
    const total = data.reduce((acc, t) => acc + (t.tipo === "deposito" ? t.monto : -t.monto), 0);

    if (transaction.tipo === "retiro" && total < transaction.monto) {
        throw new Error("Fondos insuficientes para realizar el retiro.");
    }

    transaction.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    transaction.date = new Date().toISOString();
    data.push(transaction);
    await saveToFile(data);
    return transaction;
};

const deleteTransaction = async (id) => {
    const data = await loadFromFile();
    const index = data.findIndex((t) => t.id === parseInt(id));
    if (index === -1) throw new Error("El id del elemento no existe.");
    data.splice(index, 1);
    await saveToFile(data);
    return "Eliminación exitosa.";
};

const getTotalMoneyMoved = async () => {
    const data = await loadFromFile();
    const total = data.reduce((acc, transaction) => {
        if (transaction.tipo === 'deposito') {
            return acc + transaction.monto;
        } else if (transaction.tipo === 'retiro') {
            return acc - transaction.monto;
        }
        return acc;
    }, 0);
    return total;
};

const getTransactionCount = async () => {
    const data = await loadFromFile();
    return data.length;
};

export default {
    getAllTransactions,
    addTransaction,
    deleteTransaction,
    getTotalMoneyMoved,
    getTransactionCount
};
