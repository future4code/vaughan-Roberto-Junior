import  jwt  from "jsonwebtoken"
import { authenticationData } from "../types/types"


export class Authenticator{
    static generateToken(
        payload: authenticationData
     ): string {
        return jwt.sign(
           payload,
           process.env.JWT_KEY as string,
           {
              expiresIn: '5h'
           }
        )
     }
     
     static getTokenData(
        token: string
     ): authenticationData {
        const result: any = jwt.verify(
           token,
           process.env.JWT_KEY as string
        )
     
        return { id: result.id, }
     }
}