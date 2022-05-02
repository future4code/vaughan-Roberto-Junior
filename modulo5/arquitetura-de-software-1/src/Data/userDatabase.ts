import { USER_ROLES } from "../types";
import { BaseDatabase } from "./connectionBD";

const connectionBD = new BaseDatabase();

export class userDatabase extends BaseDatabase{
    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: USER_ROLES
      ): Promise<void> {
        try {
          await connectionBD.connection('User_Arq')
            .insert({
              id,
              email,
              name,
              password,
              role
            })
        } catch (error) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}