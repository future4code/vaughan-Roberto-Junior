import { Request, Response } from 'express';
import { userBusiness } from '../Business/business';

const userbusiness = new userBusiness();

export class Login{

    async login(req: Request, res: Response) {

        
        try {
            const input = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userbusiness.getUserByEmail(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}