import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import connect from "./database/mongodb.js";
import router from "./routes/TransactionApi.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", router);
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Running my node Server!');
});

connect();

app.listen(port, () => {
    console.log(`Server is running at http://localhost: ${port}`);
});
