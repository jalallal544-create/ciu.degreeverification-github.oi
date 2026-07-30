import { pool } from "../config/database.js";
import bcrypt from "bcrypt";

class Admin {

    static async login(email,password){

        const [rows] = await pool.execute(
            "SELECT * FROM admins WHERE email=? LIMIT 1",
            [email]
        );

        if(rows.length===0) return null;

        const admin = rows[0];

        const valid = await bcrypt.compare(
            password,
            admin.password
        );

        if(!valid) return null;

        delete admin.password;

        return admin;

    }

}

export default Admin;
