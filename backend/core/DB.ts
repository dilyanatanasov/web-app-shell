const mysql = require("mysql2");

export class DB {
    public conn;

    constructor() {
        const pools = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "1224115"
        })
        this.conn = pools.promise();
    }
}