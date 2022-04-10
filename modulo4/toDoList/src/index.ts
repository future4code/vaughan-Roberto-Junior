import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

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
app.post("/post", async (req, res) => {
  const { name, nickname, email } = req.body;

  try {
    if (!name || !nickname || !email) {
      throw new Error("Preencha os campos corretamente !");
    }

    const response = await createUser(name, nickname, email);

    res.status(201).send("Usuário Criado com sucesso !");
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("TodoListUser").insert({
    id: new Date().getTime().toString(),
    name,
    nickname,
    email,
  });
};

//Exercicio2
//Endpoint para pegar um usuario por id
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await getUser(id);

    if (response.length === 0) {
      throw new Error("Usuário não encontrado !");
    }

    res.status(200).send(response);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const getUser = async (id: string): Promise<any> => {
  const body = await connection("TodoListUser")
    .select("id", "nickname")
    .where({ id: id });

  return body;
};

//Exercicio 3
//Endpoint para editar usuario
app.put("/user/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { name, nickname } = req.body;

  try {
    if (nickname === "" || name === "") {
      throw new Error("Os campos não podem estar vazios !");
    }

    let response;

    response = await editUser(id, name, nickname);

    if (response === 0) {
      throw new Error("Usuário não encontrado !");
    }

    res.status(200).send("modificado com sucesso !");
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const editUser = async (
  id: string,
  name?: string,
  nickname?: string
): Promise<any> => {
  const body = await connection("TodoListUser")
    .update({ name: name, nickname: nickname })
    .where({ id: id });
  return body;
};

//Exercicio 4
//Endpoint para Criar tarefa
app.post("/task", async (req, res) => {
  const { title, description, limitDate, creatorUserId } = req.body;

  try {
    if (
      title === "" ||
      description === "" ||
      limitDate === "" ||
      creatorUserId === ""
    ) {
      throw new Error("Verifique se os campos estão preenchidos corretamente");
    }

    let convertData = limitDate.split("/").reverse().join("/");

    const response = await createTask(
      title,
      description,
      convertData,
      creatorUserId
    );

    res.status(200).send("Tarefa criada com sucesso !");
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
): Promise<any> => {
  const task = await connection("TodoListTask").insert({
    id: new Date().getTime().toString(),
    title: title,
    description: description,
    limit_date: limitDate,
    creator_user_id: creatorUserId,
  });

  return task;
};

//Exercicio 5
//Endpoint para pehar tarefa pelo id
app.get("/task/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await consultTask(id);

    if (response.length === 0) {
      throw new Error("Tarefa não encontrada !");
    }

    //converte a data para o padrão especificado
    let newResponse = response.map((item: any) => {
      item.limit_date = item.limit_date.toLocaleDateString();
      return item;
    });

    res.status(200).send(newResponse);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const consultTask = async (id: string): Promise<any> => {
  const task = await connection("TodoListTask")
    .join("TodoListUser", "TodoListUser.id", "TodoListTask.creator_user_id")
    .select("TodoListTask.*", "TodoListUser.nickname")
    .where({ "TodoListTask.id": id });

  return task;
};

//Desafio 6
//Endpoint para pegar todos os usuarios
app.get("/users/all", async (req, res) => {
  try {
    const allUsers = await getAllUsers();

    if (allUsers.length === 0) {
      res.send(allUsers);
    }

    let usersFomat = { users: allUsers };

    res.status(200).send(usersFomat);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const getAllUsers = async (): Promise<any> => {
  const response = await connection("TodoListUser").select("id", "nickname");

  return response;
};

//Desafio 7
//Endpoint para  Pegar tarefas criadas por um usuário;

app.get("/tasks", async (req, res) => {
  const id = req.query.creatorUserId as string;

  try {
    if (!id) {
      throw new Error("Deve ser enviado um id para consulta !");
    }

    const response = await getTaskById(id);

    if (response.length === 0) {
      res.status(200).send(response);
    }

    let responseFormatDate = response.map((item: any) => {
      item.limit_date = item.limit_date.toLocaleDateString();
      return item;
    });

    let responseFormat = { tasks: responseFormatDate };

    res.send(responseFormat);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const getTaskById = async (id: string): Promise<any> => {
  const response = await connection("TodoListTask")
    .join("TodoListUser", "TodoListUser.id", "TodoListTask.creator_user_id")
    .select("TodoListTask.*", "TodoListUser.nickname")
    .where({ creator_user_id: id });

  return response;
};

//Desafio 8
//Pesquisar Usuario
app.get("/users", async (req, res) => {
  const search = req.query.query as string;

  try {
    if (!search) {
      throw new Error("Deve ser enviado um nome para a busca !");
    }

    const response = await getUserSearch(search);

    if (response.length === 0) {
      res.send(response);
    } else {
      let newResponse = { users: response };

      res.send(newResponse);
    }
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const getUserSearch = async (search: string): Promise<any> => {
  const response = await connection("TodoListUser")
    .select("id", "nickname")
    .whereILike("nickname", `%${search}%`)
    .orWhereILike("email", `%${search}%`);

  return response;
};

//Desafio 9
//Atribuir um usuário responsável a uma tarefa

app.post("/task/responsible", async (req, res) => {
  const { taskID, responsible } = req.body;

  try {
    if (!taskID || !responsible || taskID === "" || responsible === "") {
      throw new Error(
        "Verifique se os parametros estão sendo passados corretamente !"
      );
    }

    const response = await setAssignment(taskID, responsible);

    res.status(201).send("Atribuição Criada com sucesso !");
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const setAssignment = async (
  taskID: string,
  responsible: string
): Promise<any> => {
  const response = await connection(
    "TodoListResponsibleUserTaskRelation"
  ).insert({ task_id: taskID, responsible_user_id: responsible });

  return response;
};

//desafio 10
//Pegar usuários responsáveis por uma tarefa

app.get("/task/:id/responsible", async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error(
        "Verifique se os parametros estão sendo passados corretamente !"
      );
    }

    const response = await responsibleUser(id);

    let responseFormat = { users: response };

    res.status(200).send(responseFormat);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const responsibleUser = async (id: string): Promise<any> => {
  const response = await connection("TodoListResponsibleUserTaskRelation")  
    .where({responsible_user_id: id})
    .select("TodoListUser.id", "TodoListUser.nickname")
    .join(
      "TodoListUser",
      "TodoListUser.id",
      "TodoListResponsibleUserTaskRelation.responsible_user_id"
    );

  return response;
};

//desafio 11
//pegar tarefa pelo id

app.get("/task/join/:id", async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error(
        "Verifique se os parametros estão sendo passados corretamente !"
      );
    }

    const response = await getTaskId(id);

    if(response.response.length === 0){
      throw new Error("Task não encontrada !")
    }else{

    let responseFormat = {

      taskId: id,
      title: response.response[0].title,
      description: response.response[0].description,
      limitDate: new Date(response.response[0].limit_date).toLocaleDateString(),
      creatorUserId: response.response[0].creator_user_id,
      creatorUserNickname: response.response[0].nickname,
      responsibleUsers: [
        {
          id: response.responsibleUsers[0].id,
          nickname: response.responsibleUsers[0].nickname
        }
      ]
    }

    res.status(200).send(responseFormat);

  }
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const getTaskId = async (id: string): Promise<any> => {

  const response = await connection("TodoListTask")
    .where({'TodoListTask.id': id})
    .join(
      "TodoListUser", 
      "TodoListUser.id", 
      "TodoListTask.creator_user_id"
      )
    .join(
      "TodoListResponsibleUserTaskRelation",
      "TodoListResponsibleUserTaskRelation.task_id",
      "TodoListTask.id"
    )
    .select(
      "TodoListTask.id",
      "TodoListTask.title",
      "TodoListTask.description",
      "TodoListTask.limit_date",
      "TodoListTask.creator_user_id",
      "TodoListUser.nickname",
      "TodoListResponsibleUserTaskRelation.responsible_user_id",
      "TodoListResponsibleUserTaskRelation.task_id"
    );

    const responsibleUsers = await connection('TodoListResponsibleUserTaskRelation')
    .join(
      'TodoListUser',
      'TodoListUser.id',
      'TodoListResponsibleUserTaskRelation.responsible_user_id'
    )
    .select('TodoListUser.id', 'TodoListUser.nickname')
    .where({task_id: id});

  return {response, responsibleUsers};

};
