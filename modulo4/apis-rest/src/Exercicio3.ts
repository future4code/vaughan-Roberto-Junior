import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from './Lista'


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.get("/users", (req, res) => {
     const nome = String(req.query.name).toLowerCase();
     let errorCode:number = 400;

     try {
        if(!nome){
            errorCode = 422
            throw new Error('Deve-se Digitar um nome para busca');
        }
   
        let userReturn = users.find(item => item.name.toLowerCase() === nome);
   
        if(!userReturn){
            errorCode = 404
           throw new Error('Sua busca não retornou nenhum resultado !');
        }
   
        res.send(userReturn);
     }catch(err){
         res.status(errorCode).send(err.message);
     }
}) 
