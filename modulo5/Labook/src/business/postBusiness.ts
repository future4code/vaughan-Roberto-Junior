import { PostDatabase } from "../data/postDatabase"
import { Authenticator } from "../services/authenticator"
import { GenerateID } from "../services/generateID"
import { authenticationData, post, POST_TYPES } from "../types/types"



export class PostBusiness{

    static create = async (input: any) => {

    try {

        let { photo, description, type, token } = input

        if (!photo || !description || !type) {
            throw new Error('verifique se os campos estão sendo  passados corretamente !')
         }

         if(!token){
            throw new Error('Deve ser passado um token de autorização !')
         }

         const tokenData: authenticationData = Authenticator.getTokenData(token);
            
         const id: string = GenerateID.generateId();

         let post: post = {
             id,
             photo,
             description,
             type,
             created_at: new Date(),
             author_id: tokenData.id
         }

         await PostDatabase.insertPost(post);     
         
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static searchById = async (id: string, token: string) => {

        try {
    
            if (!id) {
                throw new Error('Necessario passar um ID para busca.')
             }
    
             if(!token){
                throw new Error('Deve ser passado um token de autorização !')
             }
    
             const tokenData: authenticationData = Authenticator.getTokenData(token);
    
             let resultQuery = await PostDatabase.returnPost(id);   
             
             if(!resultQuery){
                 throw new Error('Post não encontrado !');
             }

             return resultQuery;
             
            } catch (error: any) {
                throw new Error(error.message)
            }
        }

}