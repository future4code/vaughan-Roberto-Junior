import { Token } from '../Data/authenticator';
import { GenerateID } from '../Data/generateId';
import { generateHash } from '../Data/HashManager';
import { userDatabase } from '../Data/userDatabase'

const generateId = new GenerateID()
const hashManager = new generateHash();
const createUser = new userDatabase();
const gerarToken = new Token();

export class userBusiness{

    async createUser(user: any) {

        try{

            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Verifique se os campos estão sendo  passados corretamente !");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Email Inválido");
            }

            if(user.password.length < 6){
                throw new Error("Senha deve ter no minimo 6 caracteres");
            }

            let payload = {
                id: user.id,
                role: user.role
            }

            const id = generateId.generateId();
            const hashPassword = await hashManager.hash(user.password);
            await createUser.createUser(id, user.email, user.name, hashPassword, user.role);
            
            const token = gerarToken.generateToken(payload);
            
            return token;

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
}