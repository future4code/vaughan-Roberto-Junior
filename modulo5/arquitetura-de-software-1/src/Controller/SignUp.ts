import { Request, Response } from 'express';
import {userBusiness} from '../Business/business'

const userbusiness = new userBusiness();

export class SignUp{

    async signup(req: Request, res: Response) {

        
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				role: req.body.role
            }

            const token = await userbusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}