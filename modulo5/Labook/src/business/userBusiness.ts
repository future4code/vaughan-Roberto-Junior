import { UserDatabase } from "../data/userDatabase"
import { Authenticator } from "../services/authenticator"
import { GenerateID } from "../services/generateID"
import { HashManager } from "../services/hashManager"
import { authenticationData, SignupInputDTO, user, userLogin } from "../types/types"


export class UserBusiness{

    static signUp = async (input: SignupInputDTO) => {

        try {

       let {name, email, password} = input

        if (!name || !email || !password) {
            throw new Error('verifique se os campos estão sendo  passados corretamente !')
         }
   
         const id: string = GenerateID.generateId()
   
         const cypherPassword = await HashManager.hash(password)

         let findEmailExist = await UserDatabase.findByEmail(email);

         if(findEmailExist){
             throw new Error('Email Já Cadastrado !')
         }

         let newInput = {
             id,
             name,
             email,
             password: cypherPassword
         }

         await UserDatabase.insertUser(newInput);
         
         const token: string = Authenticator.generateToken({id})
         
         return token
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static login = async (input: userLogin) => {

    try {

       let {email, password} = input

        if (!password || !email) {
            throw new Error('verifique se os campos estão sendo  passados corretamente !')
         }
   
         let findEmailExist = await UserDatabase.findByEmail(email);

         if(!findEmailExist){
             throw new Error('Credenciais invalidas !')
         }

         const user: user = {
            id: findEmailExist.id,
            name: findEmailExist.name,
            email: findEmailExist.email,
            password: findEmailExist.password
         }


         const passwordIsCorrect: boolean = await HashManager.compare(password, user.password)

         if(!passwordIsCorrect){
             throw new Error('Credenciais Invalidas !');
         }
         
         const token: string = Authenticator.generateToken({id: user.id})
         
         return token
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static friend = async (id: string, token: string) => {

        try {
    
            if (!token) {
                throw new Error('Deve ser passado um token de autorização !')
             }

             const tokenID: authenticationData = Authenticator.getTokenData(token);

             await UserDatabase.insertFriend(tokenID.id, id);
                
            } catch (error: any) {
                throw new Error(error.message)
            }
        }


        static unfriend = async (id: string, token: string) => {

            try {
        
                if (!token) {
                    throw new Error('Deve ser passado um token de autorização !')
                 }
                 
                 const tokenID: authenticationData = Authenticator.getTokenData(token);
    
                 await UserDatabase.deleteFriend(tokenID.id, id);
                    
                } catch (error: any) {
                    throw new Error(error.message)
                }
            }
}