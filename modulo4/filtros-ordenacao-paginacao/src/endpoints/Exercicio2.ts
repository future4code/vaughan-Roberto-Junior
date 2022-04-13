import { Request, Response } from "express"
import  connection  from "../data/connection"
import { recipe } from "../types"


export async function orderBy( req: Request, res: Response): Promise<void> {
       
    const { name, type } = req.query;

   try {

    let result;

     if(!name && !type) {
        result = await connection("aula48_exercicio")
        .orderBy('email', 'asc');
     }else if(!name){
        result = await connection("aula48_exercicio")
        .whereILike("name", `%${type}%`)
        .orderBy('type', 'asc');
     }else if(!type){
        result = await connection("aula48_exercicio")
        .whereILike("name", `%${name}%`)
        .orderBy('name', 'asc');
     }

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