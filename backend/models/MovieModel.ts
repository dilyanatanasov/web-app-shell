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

    async getMovie(id: number): Promise<Movie> {
        const [rows] = await this.conn.query("SELECT * FROM `movies` WHERE id = ?", [id]);
        return rows[0];
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

    async updateMovie(id: number, movieData: any): Promise<boolean> {
        const updateMovieDataArray = Object.entries(movieData);
        let setStatement = "";
        let preparedStatementData = [];
        for (let i = 0; i < updateMovieDataArray.length; i++) {
            setStatement += `${updateMovieDataArray[i][0]} = ?`;
            setStatement += (i + 1 !== updateMovieDataArray.length) ? ", " : " ";
            preparedStatementData.push(updateMovieDataArray[i][1]);
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE movies SET ${setStatement} WHERE id = ?`, preparedStatementData);
        return true;
    }

    async deleteMovie(id: number): Promise<boolean> {
        await this.conn.execute("DELETE FROM `movies` WHERE id = ?", [id]);
        return true;
    }
}