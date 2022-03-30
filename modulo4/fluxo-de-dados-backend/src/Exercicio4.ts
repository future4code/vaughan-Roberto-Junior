import express from 'express'
import cors from 'cors'
import {product} from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Servidor Na Porta 3003 !'); 
})

app.get("/products", (req, res) => {
      res.send(product);
});