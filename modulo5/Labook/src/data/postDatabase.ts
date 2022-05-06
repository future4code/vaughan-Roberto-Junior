import { post } from "../types/types";
import { BaseDatabase } from "./baseDatabase";



export class PostDatabase{

    static insertPost = async (post: post): Promise<void> => {
      try {
        let { id, photo, description, type, created_at, author_id} = post
  
        await BaseDatabase.connection("labook_posts").insert({
          id,
          photo,
          description,
          type,
          created_at,
          author_id
        });

      } catch (error: any) {
        throw new Error(error.message);
      }  
    }    


    static returnPost = async (id: string): Promise<post> => {
      try {
  
        let result = await BaseDatabase.connection("labook_posts").where({ id });

        return result[0];

      } catch (error: any) {
        throw new Error(error.message);
      }  
    }    
}