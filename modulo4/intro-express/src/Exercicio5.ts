import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Porta 3000 rodando !!");
});

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const posts: Post = {
    id: 1,
    title: 'Novo Post',
    body: 'Esse é um novo post',
    userId: 10
}

app.get("/posts" , (req, res) => {
   res.send(posts)
})

