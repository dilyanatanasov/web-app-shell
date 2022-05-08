import {DB} from "../core/DB";
import {Movie} from "../types/Movie";
import {User} from "../types/Uset";

export class UserModel {
    private conn;

    constructor() {
        this.conn = new DB().conn;
    }

    async getUser(id): Promise<User[]> {
        const [rows] = await this.conn.query("" +
            "SELECT * FROM `users` WHERE id = ?", [id]);
        return rows;
    }
}