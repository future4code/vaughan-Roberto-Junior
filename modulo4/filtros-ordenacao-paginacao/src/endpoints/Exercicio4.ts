import { Request, Response } from "express"
import  connection  from "../data/connection"
import { recipe } from "../types"

export async function orderFinally( req: Request, res: Response): Promise<void> {
       
    const page: number = Number(req.query.page);
    const { name, type, order } = req.query;

   try {

    let result;

    let pagina = page;
    let nome = name;
    let tipo = type;
    let ordenacao = order;
    let limit;

    if(!pagina){
        pagina = 1;
        limit = 30;
    }

    if(!nome){
        nome = '%%'
    }

    if(!tipo){
        tipo = '%%'
    }

    if(!ordenacao){
        ordenacao = 'desc'
    }


    
        result = await connection("aula48_exercicio")
            .select("*")
            .whereILike("name", `%${nome}%`)
            // .orWhereILike("type", `%${tipo}%`)
            .orderBy('name', `${ordenacao}`)
            .limit(limit)
            .offset(limit * (pagina - 1));
      

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