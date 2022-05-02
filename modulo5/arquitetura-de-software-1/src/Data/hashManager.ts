import * as bcrypt from 'bcryptjs';

export class generateHash{
    async hash(plainText: string): Promise<any|void> {
        const cost = 12
        const salt = await bcrypt.genSalt(cost)
        return bcrypt.hash(plainText, salt)
    }

    async compare(plainText: string, cypherText: string): Promise<boolean>{
        return bcrypt.compare(plainText, cypherText)
    }
}