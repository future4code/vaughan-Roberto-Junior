import { app } from "./app";
import { getAllRecipes, filterTypeUser } from "./endpoints/Exercicio1";
import { orderBy } from "./endpoints/Exercicio2";
import { pagination } from "./endpoints/Exercicio3";
import { orderFinally } from "./endpoints/Exercicio4";

app.get("/recipes", getAllRecipes);

app.get("/recipes/:type", filterTypeUser);

app.get("/order", orderBy);

app.get("/pagination", pagination);

app.get("/orderFinally", orderFinally);