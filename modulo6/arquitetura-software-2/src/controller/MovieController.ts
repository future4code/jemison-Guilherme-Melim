import { MovieBusiness } from './../business/MovieBusiness';
import { Request, Response } from "express";

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
            res.status(400).send(error.message);
        }
    }
}
