import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroScema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    editora: { type: String },
    price: { type: Number },
    pages: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroScema);

export default livro;