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

app.post('/createUser', (req, res) => {

    const {name, email, type, age} = req.body

    try {
       
        enum UserType {
            ADMIN = "ADMIN",
            NORMAL = "NORMAL"
        }
    
        if(!name || !email || !type || !age){
    
            throw new Error("Verifique se os campos estão corretos")
    
        }
    
        if(typeof name !== 'string'){
            throw new Error("Nome deve ser do tipo string")
        }else if(typeof email !== 'string'){
            throw new Error("Email deve ser do tipo string")
        }else if(type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL){
            throw new Error("Type deve Ser Normal ou Admin")
        }else if(typeof age !== 'number' || Number(age) <= 0){
            throw new Error("Age deve ser do tipo number e maior que 0")
        }
    
    
        let newUser =  {
            id: new Date().getTime(),
            name: name,
            email: email,
            type: type.toUpperCase(),
            age: age
        }
    
        users.push(newUser);
    
        res.send(users);

    }catch(err){
        res.status(422).send(err.message)
    }

})