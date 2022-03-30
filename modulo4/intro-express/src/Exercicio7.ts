import express from 'express'
import cors from 'cors'
import { posts } from './Exercicio6';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Rodando Agora na porta 3003 !');   
});

app.get('/posts', (req, res) => {
   res.send(posts);
})
