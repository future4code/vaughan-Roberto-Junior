import express from "express";
import cors from "cors";
import { ToDoList } from "./Exercicio3";
import { Afazeres } from "./Exercicio2";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Backend rodando na porta 3003 !!");
});

app.get("/todo/:Userid/", (req, res) => {
  const id: string = req.params.Userid;

  let novaListaComId: Afazeres[] = ToDoList.filter((item) => {
    return item.userId === Number(id);
  });

  let novaListaSemId: Afazeres[] = ToDoList.filter((item) => {
    return item.userId !== Number(id);
  });

  let selectedUser = novaListaComId;
  let others = novaListaSemId;

  let todos = { selectedUser: selectedUser, others: others };


  res.send({todos});

});
