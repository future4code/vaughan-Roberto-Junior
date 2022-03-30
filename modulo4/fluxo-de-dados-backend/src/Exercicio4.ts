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

        const search = String(req.query.query)
        let status = false;

        if(search){
            for(let i = 0; i < product.length; i++){
                if(product[i].name.toLowerCase().includes(search.toLowerCase())){
                    res.send(product[i]);
                    status = true;
                }
            }
        }

        if(search === 'undefined' || search === ''){
          
            res.send(product);

        };
        

        if(!status){
            res.send("Produto Não encontrado");
        }

});