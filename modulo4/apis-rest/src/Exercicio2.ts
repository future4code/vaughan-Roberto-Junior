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


app.get('/user', (req, res) => {
   
    try {

        const type  = String(req.query.type).toLowerCase();

        if(type === 'normal' || type === 'admin'){
    
            let usersByType = users.filter((item) => item.type.toLowerCase() === type.toLowerCase());
    
            res.send(usersByType);
    
        }else{

            throw new Error('Deve-se passar um type do tipo Normal ou Admin');
        }

    }catch(err){
        res.status(422).send(err.message)
    }
    
})

//passado via queryParams, pois é só um atributo