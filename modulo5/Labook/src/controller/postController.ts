import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";



export class PostController{

    static create = async (req: Request, res: Response) => {
        try {

            const { photo, description, type } = req.body

            const token: string = req.headers.authorization as string
     
           let input = { 
               photo,
               description,
               type,
               token
           } 

           await PostBusiness.create(input);
     
           res.status(201).send('Post Criado com sucesso !');
     
        } catch (error: any) {
           res.status(400).send(error.sqlMessage || error.message)
        }
      }


      static searchById = async (req: Request, res: Response) => {
        try {

            const { id } = req.params

            const token: string = req.headers.authorization as string

           let result = await PostBusiness.searchById(id, token);
     
           res.status(201).send(result);
     
        } catch (error: any) {
           res.status(400).send(error.sqlMessage || error.message)
        }
      }
    }