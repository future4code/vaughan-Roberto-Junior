import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"


export class UserController{

    static signup = async (req: Request, res: Response) => {
        try {

           const { name, email, password } = req.body
     
           let input = { 
              name,
              email,
              password
           } 

           const token  = await UserBusiness.signUp(input)
     
           res.status(201).send({ token })
     
        } catch (error: any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
     
           res.send({ message })
        }
     })


}