import { user } from "../types/types";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase{

  static insertUser = async (User: user): Promise<user> => {
    try {
      let { id, name, email, password } = User;

      await BaseDatabase.connection("labook_users").insert({
        id,
        name,
        email,
        password,
      });

      return User;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  static findByEmail = async (email: string): Promise<user> => {
    try {
      const queryResult = await BaseDatabase.connection('labook_users')
        .where({ email });

      return queryResult[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };



  static insertFriend = async (IdFrienRequire: string, IdFriendAccept: string): Promise<void> => {
    try {
      

      let existFriend = await BaseDatabase.connection('labook_users')
        .where({id: IdFriendAccept});

        if(existFriend.length === 0){
          throw new Error('Id de amizade não existe no banco.');
        }

      await BaseDatabase.connection('labook_friendship')
        .insert({author_friend: IdFrienRequire, friend: IdFriendAccept})

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };



  static deleteFriend = async (IdFrienRequire: string, IdFriendAccept: string): Promise<void> => {
    try {
    
      
      

      let existFriend = await BaseDatabase.connection('labook_friendship')
        .where({author_friend: IdFrienRequire})
        .where({friend: IdFriendAccept});

        if(existFriend.length === 0){
          throw new Error('Você não tem amizade com essa pessoa !');
        }

        console.log(existFriend);
        

      await BaseDatabase.connection('labook_friendship')
        .delete('*')
        .where({author_friend: IdFrienRequire})
        .where({friend: IdFriendAccept});

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}
