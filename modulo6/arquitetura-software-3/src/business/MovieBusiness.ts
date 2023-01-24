import { generateID } from './../services/idGenerate';
import { CreatMovieDto, InsertCreatMovieDto } from './../model/creatMovieDTO';
import { MovieDatabase } from './../data/MovieDatabase';
import { InvalidDataMovie } from '../error/MovieErrors';


export class MovieBusiness {
    async create ({title, description, duration, year}:CreatMovieDto): Promise<void>{
        
        if(!title || !description || !duration || !year){
            throw new InvalidDataMovie()
        }


        const id = generateID()

        const user:InsertCreatMovieDto ={
            id,
            title,
            description,
            duration,
            year
        }


        const movieDatabase = new MovieDatabase()
        await movieDatabase.create(user)
    }
}