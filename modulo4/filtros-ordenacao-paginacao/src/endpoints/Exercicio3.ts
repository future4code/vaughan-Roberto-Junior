import { Request, Response } from "express"
import  connection  from "../data/connection"
import { recipe } from "../types"

export async function pagination( req: Request, res: Response): Promise<void> {
       
    const page: number = Number(req.query.page);

   try {

      const result = await connection("aula48_exercicio")
      .limit(5)
      .offset(5 * (page - 1));

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