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


//Exercicio 1
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


//Exercicio2
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


//Exercicio 3
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


//Exercicio 4
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


//Exercicio 5
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
  .join('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
  .select('TodoListTask.*', 'TodoListUser.nickname')
  .where({'TodoListTask.id': id});

  return task;

}



//Desafio 6
//Endpoint para pegar todos os usuarios
app.get('/users/all', async(req, res) => {

  try {

    const allUsers = await getAllUsers();

    if(allUsers.length === 0){
      res.send(allUsers);
    }

    let usersFomat = {users: allUsers}

    res.status(200).send(usersFomat);

  }catch(err: any){

    res.status(500).send(err.sqlMessage || err.message);

  }
})

const getAllUsers = async(): Promise<any> => {
    
    const response = await connection('TodoListUser')
                           .select('id', 'nickname');

    return response;

}


//Desafio 7
//Endpoint para  Pegar tarefas criadas por um usuário;

app.get('/tasks', async(req, res) => {

  const id = req.query.creatorUserId as string;

  try {

      if(!id){
        throw new Error('Deve ser enviado um id para consulta !')   
      }

      const response = await getTaskById(id);

      if(response.length === 0){
        res.status(200).send(response);
      }

      let responseFormatDate = response.map((item: any) => {
        item.limit_date = item.limit_date.toLocaleDateString();
        return item;
      })

      let responseFormat = {tasks: responseFormatDate}
   
      res.send(responseFormat);


  }catch(err: any){

    res.status(500).send(err.sqlMessage || err.message);

  }
})

const getTaskById = async(id: string): Promise<any> => {
    
    const response = await connection('TodoListTask')
                           .join('TodoListUser', 'TodoListUser.id', 'TodoListTask.creator_user_id')
                           .select('TodoListTask.*', 'TodoListUser.nickname')
                           .where({creator_user_id: id});

    return response;

}


//Desafio 8
//Pesquisar Usuario
app.get('/users', async(req, res) => {

  const search = req.query.query as string;

  try {

      if(!search){
        throw new Error('Deve ser enviado um nome para a busca !')   
      }

      const response = await getUserSearch(search);

      if(response.length === 0){
        res.send(response);
      }else{
        
        let newResponse = {users: response}
   
        res.send(newResponse);

      }

   


  }catch(err: any){

    res.status(500).send(err.sqlMessage || err.message);

  }
})

const getUserSearch = async(search: string): Promise<any> => {

   const response = await connection('TodoListUser')
                          .select('id' , 'nickname')
                          .whereILike('nickname', `%${search}%`)
                          .orWhereILike('email', `%${search}%`);
    
    return response;

}