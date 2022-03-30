import express from "express";
import cors from "cors";
import { product, produto } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor Na Porta 3003 !");
});

app.post("/createProduct", (req, res) => {
  try {
    let nome = req.body.name;
    let preco = req.body.price;

    if (!nome) {
      throw new Error("Campo nome não definido");
    } else if (preco <= 0) {
      throw new Error("preco tem que ser maior que zero");
    } else if (!preco) {
      throw new Error("Campo preço não definido");
    } else if (typeof nome !== "string") {
      throw new Error("Campo nome deve ser do tipo string");
    } else if (typeof preco !== "number") {
      throw new Error("Campo preço deve ser do tipo Number");
    }

    let newProduct: produto = {
      id: new Date().getTime().toString(),
      name: nome,
      price: preco,
    };

    product.push(newProduct);

    res.send(product);
  } catch (e) {
    switch (e.message) {
      case "Campo nome não definido":
        res.status(422).send(e.message);
        break;
      case "preco tem que ser maior que zero":
        res.status(422).send(e.message);
        break;
      case "Campo preço não definido":
        res.status(422).send(e.message);
        break;
      case "Campo nome deve ser do tipo string":
        res.status(422).send(e.message);
        break;
      case "Campo preço deve ser do tipo Number":
        res.status(422).send(e.message);
        break;
        default: 
        res.status(500).send('Algo inesperado aconteceu !');
        break;
    }
  }
});
