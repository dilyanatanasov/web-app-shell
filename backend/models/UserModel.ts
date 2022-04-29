import {DB} from "../core/DB";
import {Movie} from "../types/Movie";

export class UserModel {
    private conn;

    constructor() {
        this.conn = new DB().conn;
    }

    async getUser(id): Promise<Movie[]> {
        const [rows] = await this.conn.query("" +
            "SELECT * FROM `users` WHERE id = ?", [id]);
        return rows;
    }
}