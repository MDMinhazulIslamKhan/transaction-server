import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    amount: Number,
    details: String,
    date: { type: Date, default: new Date() },
    createdAt: { type: Date, default: new Date() },

});

const transactionMessage = mongoose.model("Transaction", transactionSchema);


export default transactionMessage;