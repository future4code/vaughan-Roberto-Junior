import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"
import { userLogin } from "../types/types"


export class UserController{

    static signup = async (req: Request, res: Response) => {
        try {

           const { name, email, password } = req.body
     
           let input = { 
              name,
              email,
              password
           } 

           const token  = await UserBusiness.signUp(input);
     
           res.status(201).send({ token });
     
        } catch (error: any) {
           res.status(400).send(error.sqlMessage || error.message)
        }
      }


      static login = async (req: Request, res: Response) => {
         try {
 
            const { email, password } = req.body
      
            let input: userLogin = { 
               email,
               password
            } 
 
            const token  = await UserBusiness.login(input);
      
            res.status(200).send({ token });
      
         } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
         }
       }

}