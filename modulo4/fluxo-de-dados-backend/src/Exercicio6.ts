import express, { Request, Response } from "express";
import cors from "cors";
import { product } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor Na Porta 3003 !");
});

app.delete("/deleteProduct/:id", (req: Request, res: Response) => {

  try {
    const id = req.params.id;

    let newProduct = product.filter((item) => {
      if (item.id === id) {
        return item.id !== id;
      } else {
        throw new Error("Produto Não encontrado");
      }
    });

    res.send(newProduct);
  } catch (e) {

    switch (e.message) {
      case "Produto Não encontrado":
        res.status(422).send(e.message);
        break;
      case "ID não pode ser vazio":
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send("Erro inesperado");
    }
  }
});


