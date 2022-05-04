import * as bcrypt from "bcryptjs"


export class HashManager{
    static hash = async (
        plainText: string
     ): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        return bcrypt.hash(plainText, salt)
     }
     
     static compare = async (
        plainText: string, cypherText: string
     ): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText)
     }
}