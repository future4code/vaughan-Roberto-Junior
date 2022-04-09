import express from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
import connection from './connection';

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


app.post('/post', async(req, res) => {
      const {name, nickname, email} = req.body;

      try {

        if(!name || !nickname || !email){
          throw new Error('Preencha os campos corretamente !')
        }

        const response = await createUser(name, nickname, email);
        
        res.status(201).send('Usuário Criado com sucesso !');
        

      }catch(err: any){
          res.status(500).send(err.sqlMessage || err.message)
      }
     
})

const createUser = async(name: string, nickname: string, email: string): Promise<any> => { 

   await connection('TodoListUser').insert(
     {
     id: new Date().getTime().toString(),
     name,
     nickname,
     email
     }
  )

}


app.get('/user/:id', async(req, res) => {

  const id = req.params.id;

  try {

    const response = await getUser(id);

    if(response.length === 0){
      throw new Error('Usuário não encontrado !')
    }
    
    res.status(200).send(response);
    

  }catch(err: any){
      res.status(500).send(err.sqlMessage || err.message)
  }
 
})

const getUser = async(id: string): Promise<any> => { 

  const body = await connection('TodoListUser')
  .select('id' , 'nickname')
  .where({id: id});

  return body;

}

app.put('/user/edit/:id', async(req, res) => {

  const id = req.params.id;
  const {name, nickname} = req.body;

  try {

    let response;

    response = await editUser(id, name, nickname);

    if(response === 0){
      throw new Error('Usuário não encontrado !');
    }
    
    res.status(200).send('modificado com sucesso !');
    

  }catch(err: any){
      res.status(500).send(err.sqlMessage || err.message);
  }
 
})

const editUser = async(id: string, name?: string, nickname?: string): Promise<any> => { 

  const body = await connection('TodoListUser')
  .update({name: name, nickname: nickname})
  .where({id: id});
  return body;

}