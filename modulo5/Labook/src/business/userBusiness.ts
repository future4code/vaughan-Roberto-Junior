import { SignupInputDTO } from "../types/types"
import {Request, Response} from 'express'
import { generateID } from "../services/generateID"
import { hashManager } from "../services/hashManager"


export class UserBusiness{

    static signUp = (input: SignupInputDTO) => {

        try {

       let {name, email, password} = input

        if (!name || !email || !password) {
            res.statusCode = 406
            let message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }
   
         const id: string = generateID.generateId()
   
         const cypherPassword = await hashManager.hash(password)
   
         const token: string = aut
            
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}