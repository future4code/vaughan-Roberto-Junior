import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log("Rodando Na Porta 3000 !");
});

app.get("/", (req, res) => {          
    console.log("Tudo certo por aqui"); 
    res.send("Bem vindo ao express")
})