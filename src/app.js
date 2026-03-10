import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {
        id: 1,
        title: "Teste"
    },
    {
        id: 2,
        title: "Teste 2"
    },
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    });
};

app.get("/", (req, res) => {
    res.status(200).send("Curso Express");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado");
    console.log(req.body);
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].title = req.body.title;
    res.status(200);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.slice(index, 1);
    res.status(200).send("Livro removido " + req.params.id);
});

export default app;