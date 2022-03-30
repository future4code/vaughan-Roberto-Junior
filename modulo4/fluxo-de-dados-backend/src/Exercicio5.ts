import express from 'express'
import cors from 'cors'
import {product} from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Servidor Na Porta 3003 !'); 
})

app.put("/editProduct/:id", (req, res) => {
 
    try {
        const id = req.params.id
        const newprice = req.body.price
  
        if(newprice <= 0){
            throw new Error('Preço deve ser maior que 0')
        }else if(!newprice){
          throw new Error('campo preço não definido')
        }else if(typeof newprice !== "number"){
            throw new Error('Preço deve ser do tipo numero')
        }
  
        product.map((item) => {
            if(item.id === id){
                item.price = Number(newprice)
            }else{
              throw new Error('produto não encontrado , verifique o ID')
            }
        })
  
        res.send(product)
    }catch(e){
        switch (e.message) {
            case "Preço deve ser maior que 0":
              res.status(422).send(e.message);
              break;
            case "produto não encontrado , verifique o ID":
              res.status(404).send(e.message);
              break;
            case "Campo preço não definido":
              res.status(422).send(e.message);
              break;
            case "Preço deve ser do tipo numero":
              res.status(422).send(e.message);
              break;
              default: 
              res.status(500).send('Algo inesperado aconteceu !');
              break;
          }
    }
});