require("dotenv").config();

const express = require("express");
const logRequest = require("./middleware/logger");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logRequest);
app.use(express.json());

app.use("/transactions", require("./routes/transactions"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})