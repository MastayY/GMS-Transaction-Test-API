const dbPool = require("../config/dbPool");

// -- Table: Transactions
// -- Description: This table stores information about transactions, linking members, service packets, 
// --              and any related expenses. It tracks transaction details such as type, date, and total price.

// -- Columns:
// -- 1. transactionId: 
// --    - Type: int(11)
// --    - Primary Key, Auto Increment
// --    - Unique identifier for each transaction.

// -- 2. memberId: 
// --    - Type: int(11)
// --    - Foreign Key (if linked to a 'Members' table)
// --    - Represents the member associated with the transaction.

// -- 3. packetId: 
// --    - Type: int(11)
// --    - Foreign Key (if linked to a 'Packets' table)
// --    - Represents the service packet or package related to the transaction.

// -- 4. date: 
// --    - Type: datetime
// --    - Timestamp for when the transaction occurred.

// -- 5. totalPrice: 
// --    - Type: int(11)
// --    - Total amount of the transaction.

// -- 6. transactionType: 
// --    - Type: enum('Income', 'Outcome', '', '')
// --    - Specifies whether the transaction is an income or an expense. 
// --    - Includes placeholder empty values ('', '') that could be cleaned for consistency.

// -- 7. expense_id: 
// --    - Type: int(11)
// --    - Foreign Key (if linked to an 'Expenses' table)
// --    - Indicates the expense record associated with the transaction (if any).

const getAllTransactions = async () => {
    const query = 'SELECT * FROM transactions';

    return dbPool.execute(query);
}

const getTransactionById = async (id) => {
    const query = 'SELECT * FROM transactions WHERE id = ?';

    return dbPool.execute(query, [id]);
}

const createTransaction = async (transaction) => {
    const query = 'INSERT INTO transactions (memberId, packetId, date, totalPrice, transactionType, expense_id) VALUES (?, ?, ?, ?, ?, ?)';

    return dbPool.execute(query, [transaction.memberId, transaction.packetId, transaction.date, transaction.totalPrice, transaction.transactionType, transaction.expense_id]);
}

const updateTransaction = async (id, transaction) => {
    const query = 'UPDATE transactions SET memberId = ?, packetId = ?, date = ?, totalPrice = ?, transactionType = ?, expense_id = ? WHERE transactionId = ?';

    return dbPool.execute(query, [transaction.memberId, transaction.packetId, transaction.date, transaction.totalPrice, transaction.transactionType, transaction.expense_id, id]);
}

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction
}