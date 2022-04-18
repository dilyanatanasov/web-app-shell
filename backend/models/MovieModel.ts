import {DB} from "../core/DB";
import {Movie} from "../types/Movie";
import {CreateMovieInput} from "../types/CreateMovieInput";

export class MovieModel {
    private conn;

    constructor() {
        this.conn = new DB().conn;
        console.log(this.conn)
    }

    async getMovies(): Promise<Movie[]> {
        const [rows] = await this.conn.query("SELECT * FROM `movies`");
        return rows;
    }

    async createMovie(createMovieInput: CreateMovieInput): Promise<boolean> {
        await this.conn.execute("INSERT INTO `movies`(title, duration, main_actor, genre)" +
            "VALUES (?, ?, ?, ?)", [
                createMovieInput.title,
                createMovieInput.duration,
                createMovieInput.main_actor ? createMovieInput.main_actor : null,
                createMovieInput.genre
        ]);
        return true;
    }

    async deleteMovie(id: number): Promise<boolean> {
        await this.conn.execute("DELETE FROM `movies` WHERE id = ?", [id]);
        return true;
    }
}