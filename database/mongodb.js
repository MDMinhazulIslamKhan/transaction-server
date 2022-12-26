import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('strictQuery', true)

const CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.bi5bmqx.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
    await mongoose.connect(CONNECTION_URL)
        .then(() => console.log('MongoDB connect successfully'))
        .catch((err) => console.error(err));
};

export default connect;