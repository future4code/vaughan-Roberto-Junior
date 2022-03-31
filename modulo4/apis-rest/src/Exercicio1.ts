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


app.get('/users', (req, res) => {
    res.send(users)
})

//Metodo GET

//Entidade /users para obter todos os usuarios