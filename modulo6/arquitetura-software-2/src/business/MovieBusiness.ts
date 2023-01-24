import { MovieDatabase } from './../data/MovieDatabase';


export class MovieBusiness {
    async create ({title, description, duration, year}:any): Promise<void>{
        
        if(!title || !description || !duration || !year){
            throw new Error("Dados invalidos!");
        }

        const id = Date.now().toString()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title,
            description,
            duration,
            year
        })
    }
}