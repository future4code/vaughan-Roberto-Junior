import Express from "express";
import cors from 'cors';
import { posts } from "./Exercicio6";

const app = Express();

app.use(Express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Rodando na porta 3000 !");
})

app.get("/posts/:userId", (req, res) =>{
    let userID = Number(req.params.userId);
    
    console.log(userID);

   res.send(posts.filter((item) => {
        return item.userId === userID
    })
   )
})