import { MovieBusiness } from './../business/MovieBusiness';
import { Request, Response } from "express";
import { CustomError } from '../error/CustomError';

export class MovieController {
    async create(req: Request, res: Response) :Promise<void> {

        try{
            
            const movieBusiness = new MovieBusiness()
            await movieBusiness.create({
                title: req.body.title,
                description: req.body.description,
                duration: req.body.duration,
                year: req.body.year
            })

            res.status(200).send({message: "Filme criado com sucesso!"})

        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
    }
}
