import { InsertCreatMovieDto } from './../model/creatMovieDTO';
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_MOVIE = "LABEFLIX_MOVIE"

    async create({id, title, description, duration, year}:InsertCreatMovieDto) :Promise<void> {
        await MovieDatabase.connection.insert({
            id,
            title,
            description,
            duration_in_minutes : duration,
            year_of_release : year
        }).into(MovieDatabase.TABLE_MOVIE)
    }
}