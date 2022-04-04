import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Servidor Na Porta 3003 !'); 
})

app.get("/test", (req, res) => {
    res.send('API Funcionando')
});