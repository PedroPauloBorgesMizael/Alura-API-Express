import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conection = await connectToDatabase();

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.slice(index, 1);
    res.status(200).send("Livro removido " + req.params.id);
});

export default app;