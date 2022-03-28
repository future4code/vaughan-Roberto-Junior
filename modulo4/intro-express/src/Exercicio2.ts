import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Rodando na porta 3000 !');   
});

type Cadastro = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const users: Cadastro[] = [
    {
        id: 222,
        name: "Roberto Maia",
        phone: 6194949494,
        email: 'roberto@labenu.com.br',
        website: 'www.eu.com'
    }
]

app.get("/user", (req, res) => {
    res.send(users);
})