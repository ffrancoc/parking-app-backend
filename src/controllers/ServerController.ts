
import {Request, Response} from 'express';
import { NotFoundResponse} from '../db/ServerResponses';

export abstract class ServerController {

    public static async NotFound(req: Request, res: Response){
        return res.json(NotFoundResponse);
    }
}