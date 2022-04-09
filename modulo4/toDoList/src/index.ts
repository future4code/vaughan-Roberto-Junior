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


//Endpoint para criar usuario
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


//Endpoint para pegar um usuario por id
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

//Endpoint para editar usuario
app.put('/user/edit/:id', async(req, res) => {

  const id = req.params.id;
  const {name, nickname} = req.body;

  try {

    if(nickname === "" || name === ""){
      throw new Error('Os campos não podem estar vazios !')
    }
    

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


//Endpoint para Criar tarefa
app.post('/task', async(req, res) => {

  const {title, description, limitDate, creatorUserId} = req.body;

  try {
      
      if(title === '' || description === '' || limitDate === '' || creatorUserId === ''){
        throw new Error('Verifique se os campos estão preenchidos corretamente')
      }

      let convertData = limitDate.split('/').reverse().join('/');

      const response = await createTask(title, description, convertData, creatorUserId);

      
      
    
    res.status(200).send('Tarefa criada com sucesso !');
    

  }catch(err: any){
      res.status(500).send(err.sqlMessage || err.message);
  }
 
})

const createTask = async(title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
  
  const task = await connection('TodoListTask')
  .insert({
    id: new Date().getTime().toString(),
    title: title,
    description: description,
    limit_date: limitDate,
    creator_user_id: creatorUserId
  })

  return task;

}


//Endpoint para pehar tarefa pelo id
app.get('/task/:id', async(req, res) => {

  const id = req.params.id;

  try {

      const response = await consultTask(id);

      if(response.length === 0){
        throw new Error('Tarefa não encontrada !')
      }
      
      //converte a data para o padrão especificado
      let newResponse = response.map((item: any) => {
        item.limit_date = item.limit_date.toLocaleDateString();
        return item;
      })
    
    res.status(200).send(newResponse);
    

  }catch(err: any){
      res.status(500).send(err.sqlMessage || err.message);
  }
 
})

const consultTask = async(id: string): Promise<any> => {
  
  const task = await connection('TodoListTask')
  .select('*')
  .where({id: id})

  return task;

}

