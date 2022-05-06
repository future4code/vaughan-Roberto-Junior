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
}
