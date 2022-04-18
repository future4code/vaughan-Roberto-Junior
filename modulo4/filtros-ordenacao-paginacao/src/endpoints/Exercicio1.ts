import { Request, Response } from "express"
import  connection  from "../data/connection"
import { recipe } from "../types"


//Exercicio 1
// a) 


export async function getAllRecipes( req: Request, res: Response): Promise<void> {
       
    const { name } = req.query;

   try {

      const result = await connection("aula48_exercicio").where("name", "like", `%${name}%`);

      const recipes = result.map(toRecipe);

      res.status(200).send(recipes);

   } catch (error) {
      res.status(500).send("Erro Interno");
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      Nome: input.name,
      Email: input.email,
      Tipo: input.type,
   }
}


// b) 

export async function filterTypeUser( req: Request, res: Response): Promise<void> {
       
   const { type } = req.params;

  try {

     const result = await connection("aula48_exercicio").where("type", "like", `%${type}%`);

     const recipes = result.map(toRecipe);

     res.status(200).send(recipes);

  } catch (error) {
     res.status(500).send("Erro Interno");
  }
}

