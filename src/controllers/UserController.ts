import { Request, Response } from 'express';

import { prisma } from '../db/Client';
import { OkResponse, BadRequestResponse, InternalErrorResponse} from '../db/ServerResponses';


export abstract class UserController {

    public static async users(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return res.json(InternalErrorResponse)
        }
    }

    public static async user(req: Request, res: Response) {
        try {
            const user_id: string = req.params.id;
            const validator = new RegExp('^[0-9]+$');
            let is_valid: boolean = validator.test(user_id);
            
            
            if (!is_valid){
                return res.json(BadRequestResponse);
            }
            
            const user = await prisma.user.findFirst({where:{id: Number(user_id)}});

            const data = user ? user : {};            
            return res.json(OkResponse(data));

        } catch (error) {
            return res.json(InternalErrorResponse);
        }        
    }
}