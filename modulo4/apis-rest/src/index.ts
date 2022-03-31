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



//Exercicio 1

app.get('/usersTest', (req, res) => {
    res.send(users)
})

//Metodo GET

//Entidade /users para obter todos os usuarios

//Exercicio 2

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

//Exercicio 3

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

//Exercicio 4

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

//Exercicio 5

app.put("/editLastUser", (req, res) =>{

    let lastUser = users[users.length -1];

    lastUser.name = lastUser.name + '(ALTERADO)';

    console.log(users);

    res.status(200).end()

})

//Exercicio 6

app.patch("/reEditLastUser", (req, res) =>{

    let lastUser = users[users.length -1];

    lastUser.name = lastUser.name.split('(')[0] + '(REALTERADO)';

    console.log(users);

    res.status(200).end()

})

//Exercicio 7

app.delete("/deleteUser/:id", (req, res) =>{

    try {
  
      let userId = Number(req.params.id)
  
      let newList = users.filter(item => item.id !== userId)
  
      if(newList.length === users.length){
          throw new Error('Esse ID não existe na Lista')
      }
  
      res.status(200).send(newList)
  
    }catch(err){
        res.status(422).send(err.message)
    }
  
  })